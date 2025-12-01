export default function Footer() {
    return (
        <footer className="py-8 border-t border-glass-border text-center text-muted text-sm">
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
                <p className="mt-2">Built with Next.js & Tailwind CSS</p>
            </div>
        </footer>
    );
}
