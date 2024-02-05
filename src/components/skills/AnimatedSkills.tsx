import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "framer-motion";
import Skills from "../shared/Skills";

interface ParallaxProps {
  children: object;
  baseVelocity: number;
}

function ParallaxText({ baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-80, 80, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 1) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() * moveBy);
  });

  return (
    <div className="flex h-fit w-full shadow-sm shadow-slate-600 p-2 rounded-full animate-in slide-in-from-bottom-40">
      <motion.div className="scroller" style={{ x }}>
        <Skills />
      </motion.div>
    </div>
  );
}

export default function AnimatedSkills() {
  return (
    <section className="md:hidden block overflow-hidden w-full h-full">
      <ParallaxText baseVelocity={5}>
        <Skills />
      </ParallaxText>
    </section>
  );
}
