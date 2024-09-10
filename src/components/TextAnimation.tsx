import { motion, useAnimationControls, useDragControls } from "framer-motion";
import { PointerEventHandler, useEffect } from "react";

export default function TextAnimation({ text }: { text: string }) {
  const animationControls = useAnimationControls();
  const dragControls = useDragControls();

  const startDrag = (event) => {
    dragControls.start(event);
  };

  const endDrag = (event) => {
    animationControls.start("return", { duration: 0.4, ease: "backInOut" });
  };

  const hoverStart = () => {
    animationControls.start("hover");
  };

  const hoverEnd = () => {
    animationControls.start("initial", { duration: 0.1 });
  };
  const splitText = text.split("");

  // animation on page load

  useEffect(() => {
    animationControls.start("onPageLoad", { duration: 1, ease: "circOut" });
  }, []);

  function getRandomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  return (
    <motion.h1
      className="text-[10em] h-min hover:cursor-pointer"
      whileHover="hover"
      onHoverStart={hoverStart}
      onHoverEnd={hoverEnd}
      onPointerDown={startDrag}
    >
      {splitText.map((item, i) => (
        <motion.span
          className="inline-block"
          key={i}
          variants={{
            initial: { y: 0 },
            hover: { y: [0, -20, 0] },
            onPageLoad: {
              y: [-100, 0],
              x: [getRandomInRange(-1000, 1000) * i, 0],
              opacity: [0, 1],
            },
            return: {
              x: 0,
              y: 0,
            },
          }}
          animate={animationControls}
          drag
          dragControls={dragControls}
          onDragEnd={endDrag}
          style={{ touchAction: "none" }}
          // animate={{ y: [0, 100, 0] }}
          transition={{
            ease: "easeInOut",
            delay: 0.1 * i,
            duration: 0.3,
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.h1>
  );
}
