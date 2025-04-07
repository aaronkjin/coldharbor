import { motion } from "framer-motion";

interface LumonLogoProps {
  animationState: "initial" | "globe" | "text" | "complete";
}

export const LumonLogo = ({ animationState }: LumonLogoProps) => {
  const ovalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const globeVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.ellipse
          cx="100"
          cy="60"
          rx="90"
          ry="50"
          stroke="#8bdae9"
          strokeWidth="1.5"
          fill="none"
          initial="hidden"
          animate={animationState !== "initial" ? "visible" : "hidden"}
          variants={ovalVariants}
        />

        <motion.g
          initial="hidden"
          animate={
            animationState !== "initial" && animationState !== "globe"
              ? "visible"
              : "hidden"
          }
          variants={globeVariants}
          stroke="#8bdae9"
          strokeWidth="1.5"
          fill="none"
        >
          <ellipse cx="100" cy="60" rx="70" ry="38" />
          <line x1="30" y1="60" x2="170" y2="60" />
          <path d="M 40 35 Q 100 15 160 35" />
          <path d="M 40 85 Q 100 105 160 85" />

          <path d="M 100 22 Q 100 60 100 98" />
          <path d="M 70 30 Q 70 60 70 90" />
          <path d="M 130 30 Q 130 60 130 90" />
        </motion.g>

        <motion.text
          x="100"
          y="65"
          textAnchor="middle"
          fill="#8bdae9"
          fontFamily="sans-serif"
          fontSize="18"
          fontWeight="500"
          initial="hidden"
          animate={
            animationState === "text" || animationState === "complete"
              ? "visible"
              : "hidden"
          }
          variants={textVariants}
        >
          LUMON
        </motion.text>
      </svg>
    </div>
  );
};
