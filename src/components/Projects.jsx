"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
            tags: ["Next.js", "Stripe", "Tailwind"],
            link: "#",
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity tool for teams to organize tasks, set deadlines, and track progress in real-time.",
            tags: ["React", "Firebase", "DnD"],
            link: "#",
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website to showcase skills and projects (like this one!).",
            tags: ["Next.js", "Framer Motion", "CSS"],
            link: "#",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [projects.length]);

    return (
        <section id="projects" className="section-padding bg-black/20">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-gradient">Projects</span>
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="glass-card p-8 rounded-2xl flex flex-col h-full w-full"
                            >
                                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-6 flex items-center justify-center border border-white/5">
                                    <span className="text-muted text-xl">Project Preview</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{projects[currentIndex].title}</h3>
                                <p className="text-muted mb-6 text-lg">
                                    {projects[currentIndex].description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {projects[currentIndex].tags.map((tag) => (
                                        <span key={tag} className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={projects[currentIndex].link}
                                    className="text-center w-full py-3 rounded-lg border border-glass-border hover:bg-white/5 transition-colors font-medium"
                                >
                                    View Details
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-12 md:-left-20 transform -translate-y-1/2 p-4 rounded-full glass transition-colors z-10 group"
                        aria-label="Previous Project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:text-primary transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-12 md:-right-20 transform -translate-y-1/2 p-4 rounded-full glass transition-colors z-10 group"
                        aria-label="Next Project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:text-primary transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </motion.button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex ? "bg-primary" : "bg-white/20 hover:bg-white/40"
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
