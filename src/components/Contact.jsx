export default function Contact() {
    return (
        <section id="contact" className="section-padding">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Get In <span className="text-gradient">Touch</span>
                </h2>

                <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
                    I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi,
                    I&apos;ll try my best to get back to you!
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="mailto:hello@example.com"
                        className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        Say Hello
                    </a>

                    <div className="flex gap-4">
                        {/* Social Icons Placeholders */}
                        <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
                            GH
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
                            LI
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
                            TW
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
