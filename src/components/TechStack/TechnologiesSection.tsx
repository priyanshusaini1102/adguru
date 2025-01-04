"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const technologies = [
  { name: 'HTML', logo: '/icons/html5.svg', category: 'Frontend' },
  { name: 'CSS', logo: '/icons/css3.svg', category: 'Frontend' },
  { name: 'JavaScript', logo: '/icons/javascript.svg', category: 'Frontend' },
  { name: 'TypeScript', logo: '/icons/typescript.svg', category: 'Frontend' },
  { name: 'React', logo: '/icons/react.svg', category: 'Frontend' },
  { name: 'NextJS', logo: '/icons/nextjs.svg', category: 'Frontend' },
  { name: 'NodeJS', logo: '/icons/nodejs.svg', category: 'Backend' },
  { name: 'ExpressJS', logo: '/icons/express.svg', category: 'Backend' },
  { name: 'Spring Boot', logo: '/icons/spring.svg', category: 'Backend' },
  // Updated Vercel logo to use a simple text representation since their logo is primarily text-based
  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'Cloud' },
  { name: 'AWS', logo: '/icons/aws.svg', category: 'Cloud' },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'Cloud' },
];

const categories = ['All', 'Frontend', 'Backend', 'Cloud'];

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filteredTechnologies = technologies.filter(tech => 
    activeCategory === 'All' || tech.category === activeCategory
  );

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver exceptional solutions for our clients.
            Our team masters these tools to ensure the highest quality in every project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredTechnologies.map((tech) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="bg-card p-6 rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 h-full flex flex-col items-center justify-center gap-4">
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    fill
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">{tech.name}</h3>
                {hoveredTech === tech.name && (
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
          ))}
        </div>
      </div>
    </section>
  );
}