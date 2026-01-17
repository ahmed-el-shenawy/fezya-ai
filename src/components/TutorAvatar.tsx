"use client";

import { motion } from "framer-motion";
import { Atom } from "lucide-react";

interface TutorAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-32 h-32",
};

const iconSizes = {
  sm: 20,
  md: 28,
  lg: 40,
  xl: 56,
};

export const TutorAvatar = ({
  size = "md",
  animated = true,
}: TutorAvatarProps) => {
  return (
    <motion.div
      className={`relative ${sizeClasses[size]} rounded-full physics-gradient p-1`}
      animate={
        animated
          ? {
              boxShadow: [
                "0 0 20px -5px hsl(234 89% 54% / 0.4)",
                "0 0 40px -5px hsl(234 89% 54% / 0.6)",
                "0 0 20px -5px hsl(234 89% 54% / 0.4)",
              ],
            }
          : {}
      }
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
        <motion.div
          animate={animated ? { rotate: 360 } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Atom size={iconSizes[size]} className="text-primary" />
        </motion.div>
      </div>

      {/* Orbiting particles */}
      {animated && (
        <>
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-accent"
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "-150% 0",
            }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-warning"
            animate={{
              rotate: -360,
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "200% 0",
            }}
          />
        </>
      )}
    </motion.div>
  );
};
