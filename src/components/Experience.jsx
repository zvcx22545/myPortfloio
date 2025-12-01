export default function Experience() {
    const experiences = [
        {
            id: 1,
            role: "Fullstack Developer",
            company: "Tech Company Name",
            period: "2024 - Present",
            description: "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
        },
        {
            id: 2,
            role: "Junior Web Developer",
            company: "Previous Company",
            period: "2023 - 2024",
            description: "Assisted in the development of client websites. Implemented responsive designs and optimized frontend performance.",
        },
    ];

    return (
        <section id="experience" className="section-padding">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work <span className="text-gradient">Experience</span>
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-accent">{exp.company}</p>
                                </div>
                                <span className="text-sm text-muted font-mono mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-muted leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
