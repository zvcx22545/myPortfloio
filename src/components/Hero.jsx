"use client";

import Link from "next/link";

import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/80 to-background z-10" />
                <Image 
                    src="/banner.png" 
                    alt="Cyberpunk Banner" 
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>
            
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 md:px-12 text-center z-10 relative">
                <div className="mb-8 relative inline-block">
                    <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-full blur-lg opacity-75 animate-pulse"></div>
                    <Image
                        src="/profile.png"
                        alt="Profile"
                        width={150}
                        height={150}
                        className="relative rounded-full border-4 border-glass-border shadow-2xl object-cover"
                        priority
                    />
                </div>

                <h2 className="text-sm md:text-base font-mono text-accent mb-4 tracking-wider">
                    FULLSTACK DEVELOPER
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Building Digital <br />
                    <span className="text-gradient">Experiences</span>
                </h1>
                <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    I craft beautiful, high-performance websites and applications with modern technologies.
                    Let&#39;s turn your vision into reality.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-primary hover:bg-purple-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 border border-glass-border hover:border-primary hover:text-primary rounded-full font-medium transition-all glass"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}
