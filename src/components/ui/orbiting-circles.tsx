import React from "react";
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-border/20"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": calculatedDuration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className="absolute flex items-center justify-center"
            style={{
              transform: `rotate(${(360 / React.Children.count(children)) * index}deg) translateX(var(--radius)px) rotate(-${(360 / React.Children.count(children)) * index}deg)`,
            }}
          >
            <div
              className="flex items-center justify-center rounded-full bg-card border border-border shadow-lg"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            >
              {React.cloneElement(child as React.ReactElement, {
                width: iconSize * 0.6,
                height: iconSize * 0.6,
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}