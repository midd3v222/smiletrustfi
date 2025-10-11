"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  fullHeight = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center",
        fullHeight ? "min-h-screen" : "h-screen",
        "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
        className
      )}
      {...props}>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          "--aurora-light":
            "repeating-linear-gradient(100deg,#3b82f6_10%,#60a5fa_15%,#1e40af_20%,#059669_25%,#1d4ed8_30%)",
          "--aurora-dark":
            "repeating-linear-gradient(100deg,#60a5fa_10%,#3b82f6_15%,#1e40af_20%,#10b981_25%,#2563eb_30%)",
          "--dark-gradient":
            "repeating-linear-gradient(100deg,#f8fafc_0%,#f8fafc_7%,transparent_10%,transparent_12%,#f8fafc_16%)",
          "--light-gradient":
            "repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%)",
        }}>
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-20 blur-[10px] will-change-transform",
            "animate-aurora",
            "[background-image:var(--light-gradient),var(--aurora-light)]",
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",
            "dark:[background-image:var(--dark-gradient),var(--aurora-dark)]",
            "dark:opacity-30",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}>
        </div>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-15 blur-[15px] will-change-transform",
            "animate-aurora-slow",
            "[background-image:var(--light-gradient),var(--aurora-light)]",
            "[background-size:200%,_100%]",
            "[background-attachment:fixed]",
            "mix-blend-difference",
            "dark:[background-image:var(--dark-gradient),var(--aurora-dark)]",
            "dark:mix-blend-normal",
            "dark:opacity-25"
          )}>
        </div>
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
