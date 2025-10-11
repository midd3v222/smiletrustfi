"use client";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        containerClassName
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-lg blur-3xl opacity-30 -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={cn("relative z-10", className)}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{ 
        backgroundSize: "0% 100%",
        opacity: 1
      }}
      animate={{ 
        backgroundSize: "100% 100%",
        opacity: 1
      }}
      transition={{
        duration: 2,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 0.8,
      }}
      style={{
        backgroundImage: "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "0% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        display: "inline-block",
        position: "relative",
      }}
      className={cn(
        "relative inline-block px-1 font-bold",
        className
      )}
    >
      {children}
      {/* Highlight background effect */}
      <motion.div
        initial={{ 
          scaleX: 0,
          opacity: 0.3
        }}
        animate={{ 
          scaleX: 1,
          opacity: 0.2
        }}
        transition={{
          duration: 2,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.8,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
          borderRadius: "4px",
          transformOrigin: "left center",
          zIndex: -1,
        }}
      />
    </motion.span>
  );
};