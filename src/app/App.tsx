import { AppStore } from "./AppStore";
import { AppRouter } from "./AppRouter";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimationProvider } from "@/stores/AnimationProvider";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(() => {});

  return (
    <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5 }}>
      <AppStore>
        <AnimationProvider>
          <AppRouter />
        </AnimationProvider>
      </AppStore>
    </ReactLenis>
  );
}

export default App;
