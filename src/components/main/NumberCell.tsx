import { motion } from "framer-motion";
import { useState } from "react";

interface NumberCellProps {
  number: string;
  isHighlighted?: boolean;
  proximity?: number;
}

export const NumberCell = ({
  number,
  isHighlighted = false,
  proximity = 0,
}: NumberCellProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`w-8 h-8 flex items-center justify-center text-xl ${
        isHighlighted ? "text-lumon-highlight font-medium" : ""
      }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.5 : proximity > 0 ? 1 + proximity * 0.5 : 1,
        y: isHovered || proximity > 0.5 ? [0, -2, 0, 2, 0] : 0,
        color:
          isHighlighted || isHovered || proximity > 0.5 ? "#a2e9f3" : "#8bdae9",
      }}
      transition={{
        scale: { duration: 0.2 },
        y: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1.5,
          ease: "easeInOut",
        },
      }}
    >
      {number}
    </motion.div>
  );
};
