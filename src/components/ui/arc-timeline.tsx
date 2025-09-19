import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ArcTimelineItem {
  time: string;
  steps: Array<{
    icon: React.ReactNode;
    content: string;
  }>;
}

export interface ArcTimelineProps {
  data: ArcTimelineItem[];
  defaultActiveStep?: {
    time: string;
    stepIndex: number;
  };
  className?: string;
  arcConfig?: {
    circleWidth?: number;
    angleBetweenMinorSteps?: number;
    lineCountFillBetweenSteps?: number;
    boundaryPlaceholderLinesCount?: number;
  };
}

export function ArcTimeline({
  data,
  defaultActiveStep,
  className,
  arcConfig = {},
}: ArcTimelineProps) {
  const {
    circleWidth = 3000,
    angleBetweenMinorSteps = 0.5,
    lineCountFillBetweenSteps = 6,
    boundaryPlaceholderLinesCount = 30,
  } = arcConfig;

  const [activeStep, setActiveStep] = useState(
    defaultActiveStep || { time: data[0]?.time || "", stepIndex: 0 }
  );


  // Calculate total steps
  const totalSteps = data.reduce((acc, item) => acc + item.steps.length, 0);

  // Calculate angles for each step
  const stepAngles: Array<{ time: string; stepIndex: number; angle: number }> = [];
  let currentAngle = -90; // Start from top
  const anglePerStep = 180 / (totalSteps - 1); // Semicircle

  data.forEach((timeGroup) => {
    timeGroup.steps.forEach((_, stepIndex) => {
      stepAngles.push({
        time: timeGroup.time,
        stepIndex,
        angle: currentAngle,
      });
      currentAngle += anglePerStep;
    });
  });

  // Generate arc path
  const generateArcPath = (startAngle: number, endAngle: number, radius: number) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = Math.cos(startRad) * radius;
    const y1 = Math.sin(startRad) * radius;
    const x2 = Math.cos(endRad) * radius;
    const y2 = Math.sin(endRad) * radius;

    const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "min-h-[400px] flex flex-col items-center justify-center",
        className
      )}
    >
      <div className="relative w-full max-w-4xl mx-auto">
        <svg
          viewBox="-600 -350 1200 400"
          className="w-full h-auto"
          style={{ maxHeight: "400px" }}
        >
          {/* Background arc */}
          <path
            d={generateArcPath(-90, 90, 250)}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Active arc segment */}
          {(() => {
            const activeIndex = stepAngles.findIndex(
              (s) => s.time === activeStep.time && s.stepIndex === activeStep.stepIndex
            );
            if (activeIndex > 0) {
              const endAngle = stepAngles[activeIndex].angle;
              return (
                <path
                  d={generateArcPath(-90, endAngle, 250)}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  className="transition-all duration-500"
                />
              );
            }
            return null;
          })()}

          {/* Step markers and lines */}
          {stepAngles.map((step, index) => {
            const rad = (step.angle * Math.PI) / 180;
            const x = Math.cos(rad) * 250;
            const y = Math.sin(rad) * 250;
            const isActive =
              step.time === activeStep.time && step.stepIndex === activeStep.stepIndex;
            const isPast = index < stepAngles.findIndex(
              (s) => s.time === activeStep.time && s.stepIndex === activeStep.stepIndex
            );

            return (
              <g key={`${step.time}-${step.stepIndex}`}>
                {/* Marker line */}
                <line
                  x1={Math.cos(rad) * 240}
                  y1={Math.sin(rad) * 240}
                  x2={Math.cos(rad) * 260}
                  y2={Math.sin(rad) * 260}
                  stroke={isPast || isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                  strokeWidth="2"
                  className="transition-colors duration-300"
                />

                {/* Clickable circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill={isActive ? "hsl(var(--primary))" : "hsl(var(--background))"}
                  stroke={isPast || isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300 hover:r-10"
                  onClick={() => setActiveStep({ time: step.time, stepIndex: step.stepIndex })}
                />
              </g>
            );
          })}

          {/* Time labels */}
          {data.map((timeGroup, groupIndex) => {
            const firstStepIndex = data
              .slice(0, groupIndex)
              .reduce((acc, g) => acc + g.steps.length, 0);
            const lastStepIndex = firstStepIndex + timeGroup.steps.length - 1;

            const startAngle = stepAngles[firstStepIndex]?.angle || -90;
            const endAngle = stepAngles[lastStepIndex]?.angle || -90;
            const midAngle = (startAngle + endAngle) / 2;
            const rad = (midAngle * Math.PI) / 180;

            const x = Math.cos(rad) * 320;
            const y = Math.sin(rad) * 320;

            return (
              <text
                key={timeGroup.time}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-foreground font-semibold text-sm"
              >
                {timeGroup.time}
              </text>
            );
          })}
        </svg>

        {/* Content display */}
        <div className="mt-8 text-center">
          {data.map((timeGroup) =>
            timeGroup.steps.map((step, stepIndex) => {
              const isActive =
                timeGroup.time === activeStep.time &&
                stepIndex === activeStep.stepIndex;

              if (!isActive) return null;

              return (
                <div
                  key={`${timeGroup.time}-${stepIndex}`}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {step.icon}
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {timeGroup.time}
                    </span>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {step.content}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              const currentIndex = stepAngles.findIndex(
                (s) => s.time === activeStep.time && s.stepIndex === activeStep.stepIndex
              );
              if (currentIndex > 0) {
                const prev = stepAngles[currentIndex - 1];
                setActiveStep({ time: prev.time, stepIndex: prev.stepIndex });
              }
            }}
            className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            disabled={
              stepAngles.findIndex(
                (s) => s.time === activeStep.time && s.stepIndex === activeStep.stepIndex
              ) === 0
            }
          >
            Previous
          </button>
          <button
            onClick={() => {
              const currentIndex = stepAngles.findIndex(
                (s) => s.time === activeStep.time && s.stepIndex === activeStep.stepIndex
              );
              if (currentIndex < stepAngles.length - 1) {
                const next = stepAngles[currentIndex + 1];
                setActiveStep({ time: next.time, stepIndex: next.stepIndex });
              }
            }}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            disabled={
              stepAngles.findIndex(
                (s) => s.time === activeStep.time && s.stepIndex === activeStep.stepIndex
              ) === stepAngles.length - 1
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export { ArcTimelineItem };