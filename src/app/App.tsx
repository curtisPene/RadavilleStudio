import { AppStore } from "./AppStore";
import { AppRouter } from "./AppRouter";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5 }}>
      <AppStore>
        <AppRouter />
      </AppStore>
    </ReactLenis>
  );
}

export default App;
