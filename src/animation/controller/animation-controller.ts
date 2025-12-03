import type { AnimationId } from "@/types/AnimationIds";
import type { StateId } from "@/types/StateIds";

type TimelineAction = "play" | "pause" | "kill" | "reverse";

interface IQueuedAction {
  timelineId: AnimationId;
  action: TimelineAction;
}

export class AnimationController {
  private timelines = new Map<AnimationId, gsap.core.Timeline>();
  private queue: IQueuedAction[] = [];
  private stateMap = new Map<StateId, AnimationId[]>();
  private readyState = false;

  ready() {
    this.readyState = true;
    this.flushQueue();
  }

  register = (timelineId: AnimationId, timeline: gsap.core.Timeline) => {
    this.timelines.set(timelineId, timeline);
    this.flushQueue();
  };

  registerBatch = (timelines: Array<{ id: AnimationId; timeline: gsap.core.Timeline }>) => {
    timelines.forEach(({ id, timeline }) => {
      this.timelines.set(id, timeline);
    });
    this.flushQueue();
  };

  defineState = (stateKey: StateId, timelineIds: AnimationId[]) => {
    this.stateMap.set(stateKey, timelineIds);
  };

  deregister = (timelineId: AnimationId) => {
    const tl = this.timelines.get(timelineId);
    if (!tl) {
      console.log(`Timeline ${timelineId} not found`);
      return;
    }
    tl.kill();
    this.timelines.delete(timelineId);
  };

  trigger(timelineId: AnimationId) {
    const tl = this.timelines.get(timelineId);
    if (!tl) {
      this.queue.push({ timelineId, action: "play" });
      return;
    }
    tl.play(0);
  }

  pause(timelineId: AnimationId) {
    const tl = this.timelines.get(timelineId);
    if (!tl) {
      this.queue.push({ timelineId, action: "pause" });
      return;
    }
    tl.pause();
  }

  reverse(timelineId: AnimationId) {
    const tl = this.timelines.get(timelineId);
    if (!tl) {
      this.queue.push({ timelineId, action: "reverse" });
      return;
    }
    tl.reverse();
  }

  kill(timelineId: AnimationId) {
    const tl = this.timelines.get(timelineId);
    if (!tl) {
      this.queue.push({ timelineId, action: "kill" });
      return;
    }
    tl.kill();
    this.timelines.delete(timelineId);
  }

  gotoState(stateKey: StateId) {
    const timelineIds = this.stateMap.get(stateKey);
    if (!timelineIds) {
      console.log(`State ${stateKey} not found`);
      return;
    }
    timelineIds.forEach((id) => {
      const tl = this.timelines.get(id);
      if (!tl) {
        this.queue.push({ timelineId: id, action: "play" });
        return;
      }
      tl.play(0);
    });
  }

  private flushQueue = () => {
    if (!this.readyState) return;

    const pending = [...this.queue];
    this.queue = [];

    pending.forEach(({ timelineId, action }) => {
      const tl = this.timelines.get(timelineId);
      if (!tl) {
        this.queue.push({ timelineId, action });
        return;
      }

      if (action === "play") tl.play(0);
      if (action === "pause") tl.pause();
      if (action === "reverse") tl.reverse();
      if (action === "kill") {
        tl.kill();
        this.timelines.delete(timelineId);
      }
    });
  };
}

export const animationController = new AnimationController();
