"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { useThemeStore } from "../Libs/themeStore";

export default function CircularText() {
  const getColor = useThemeStore((s) => s.getColor);

  return (
    <div className="relative w-40 h-40 mx-auto mb-8">
      {/* Rotating Text Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="textCircle"
              d="M 100,100
               m -75,0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text
            style={{
              fontSize: "14px",
              fill: getColor("textSecondary"),
              letterSpacing: "2px",
            }}
          >
            <textPath href="#textCircle" startOffset="0%">
              MY JOB EXPERIENCE • MY JOB EXPERIENCE •
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* NON-ROTATING CENTER ICON */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          rounded-full shadow-xl
        "
        style={{
          // background: getColor("cardBg"),
          border: `1px solid ${getColor("border")}`,
        }}
      >
        <Briefcase
          size={36}
          strokeWidth={1.5}
          style={{ color: getColor("primary") }}
        />
      </div>
    </div>
  );
}
