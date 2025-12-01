export default function Skills() {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "API Design"] },
        { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
        { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma"] },
    ];

    return (
        <section id="skills" className="section-padding bg-black/20">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-gradient">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-accent">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-white/5 text-sm rounded-full border border-white/10 hover:border-primary/50 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
