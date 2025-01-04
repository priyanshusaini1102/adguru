"use client";

import { useState } from "react";
import { TechnologyCard } from "./TechnologyCard";
import { CategoryFilter } from "./CategoryFilter";
import { categories, technologies } from "./data";

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

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredTechnologies.map((tech) => (
            <TechnologyCard
              key={tech.name}
              tech={tech}
              isHovered={hoveredTech === tech.name}
              onHover={setHoveredTech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}