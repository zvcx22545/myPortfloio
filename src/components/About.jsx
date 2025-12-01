export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    About <span className="text-gradient">Me</span>
                </h2>

                <div className="glass-card p-8 md:p-12 rounded-2xl">
                    <p className="text-lg text-muted leading-relaxed mb-6">
                        Hello! I&#39;m a passionate Fullstack Developer with 1 year of professional experience building web applications.
                        I enjoy creating software that solves real-world problems and provides an exceptional user experience.
                    </p>
                    <p className="text-lg text-muted leading-relaxed">
                        My journey in tech started with a curiosity for how things work on the web, which led me to dive deep into
                        JavaScript, React, and Node.js. I&#39;m constantly learning new technologies and best practices to improve my craft.
                        When I&#39;m not coding, you can find me exploring new tech trends or contributing to open-source projects.
                    </p>
                </div>
            </div>
        </section>
    );
}
