"use client";

import { useRef } from "react";
import { motion, HTMLMotionProps, useInView } from "framer-motion";

interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  ...props
}: MotionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeInZoom = ({
  children,
  delay = 0,
  className,
  ...props
}: MotionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlowZoom = ({
  children,
  delay = 0,
  duration = 1.8,
  className,
  ...props
}: MotionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1.0 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className,
  delay = 0,
  ...props
}: MotionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className, ...props }: MotionProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const PopIn = ({ children, className, ...props }: MotionProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" }, // 꺼진 상태 (흐릿)
      visible: { opacity: 1, scale: 1, filter: "blur(0px)" }, // 켜진 상태 (선명)
    }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({
  children,
  className,
  ...props
}: MotionProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 0.5 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

interface FadeInProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition"
> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: "slow" | "medium" | "fast";
  delay?: "none" | "short" | "medium" | "long";
  className?: string;
}

const durationMap = {
  slow: 1.0,
  medium: 0.7,
  fast: 0.5,
};

const delayMap = {
  none: 0,
  short: 0.1,
  medium: 0.3,
  long: 0.5,
};

const getInitialPosition = (direction: FadeInProps["direction"]) => {
  switch (direction) {
    case "up":
      return { y: 20 };
    case "down":
      return { y: -20 };
    case "left":
      return { x: 20 };
    case "right":
      return { x: -20 };
    case "none":
    default:
      return {};
  }
};

export const FadeIn = ({
  children,
  direction = "up",
  duration = "medium",
  delay = "none",
  className,
  ...props
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const initialPosition = getInitialPosition(direction);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialPosition }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...initialPosition }
      }
      transition={{
        duration: durationMap[duration],
        delay: delayMap[delay],
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
