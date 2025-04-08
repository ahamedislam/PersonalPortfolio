import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeInOut"
    }
  })
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideInFromLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: (delay = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const slideInFromRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: (delay = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const scaleInCenter: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (delay = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};
