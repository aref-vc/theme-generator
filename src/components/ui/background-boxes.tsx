"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Boxes = ({ className, ...props }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(5).fill(1);

  // Using CSS variables from the current theme
  const colors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--accent))",
    "hsl(var(--primary) / 0.8)",
    "hsl(var(--secondary) / 0.8)",
    "hsl(var(--accent) / 0.8)",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
        className
      )}
      {...props}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-border/30 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                backgroundColor: "transparent",
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-border/30 relative hover:z-50"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-border/50 stroke-[1px] pointer-events-none"
                  fill="none"
                >
                  <path
                    d="M8 0L8 12.5M16 0L16 12.5M24 0L24 12.5M32 0L32 12.5M0 0L0 12.5"
                    stroke="currentColor"
                  ></path>
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};