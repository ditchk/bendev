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
    stiffness: 100
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {
    clamp: true
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-1, 50, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 5000);
    if (velocityFactor.get() < -1) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 1) {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });


  return (
    <div className="w-full h-fit">
      <motion.div className="flex flex-col justify-center items-center" style={{ x }}>
        <Skills />
      </motion.div>
    </div>
  );
}

export default function AnimatedSkills() {
  return (
    <section className="md:hidden block overflow-hidden w-full h-full">
      <ParallaxText baseVelocity={10}>
        <Skills />
      </ParallaxText>
    </section>
  );
}
