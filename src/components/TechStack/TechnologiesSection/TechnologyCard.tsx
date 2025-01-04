"use client";

import { motion } from "framer-motion";
import type { Technology } from "./types";

interface TechnologyCardProps {
  tech: Technology;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}

export function TechnologyCard({ tech, isHovered, onHover }: TechnologyCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="relative group"
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="bg-card p-6 rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 h-full flex flex-col items-center justify-center gap-4">
        <div className="relative w-16 h-16 mb-2">
          <img
            src={tech.logo}
            alt={`${tech.name} logo`}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-semibold text-center">{tech.name}</h3>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 bg-primary/95 rounded-xl flex items-center justify-center p-4"
          >
            <p className="text-primary-foreground text-center text-sm">
              Expert-level development and implementation with {tech.name}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}