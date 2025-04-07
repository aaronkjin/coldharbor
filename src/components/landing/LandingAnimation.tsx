import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { LumonLogo } from "./LumonLogo";

export const LandingAnimation = () => {
  const [animationState, setAnimationState] = useState<
    "initial" | "globe" | "text" | "complete"
  >("initial");
  const router = useRouter();

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationState("globe"), 2000),
      setTimeout(() => setAnimationState("text"), 4000),
      setTimeout(() => setAnimationState("complete"), 6000),
      setTimeout(() => router.push("/main"), 8000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [router]);

  return (
    <div className="bg-lumon-bg w-screen h-screen flex items-center justify-center">
      <LumonLogo animationState={animationState} />
    </div>
  );
};
