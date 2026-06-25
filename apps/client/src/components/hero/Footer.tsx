import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/yuvrajnode",
            label: "GitHub",
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/yuvrajnode/",
            label: "LinkedIn",
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            href: "https://x.com/yuvrajnode",
            label: "Twitter",
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:yuvrajsingh9027249999@gmail.com",
            label: "Email",
        },
    ];

    return (
        <footer className="w-full border-t border-white/[0.06] py-8 px-4 mt-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-2xl">
                    ძထძℓ౿
                    <span className="px-1.5 py-0.5 text-[#00f0ff] glow-text-cyan">ᦓραс౿</span>
                </div>

                <div className="flex gap-4">
                    {socialLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-white/30 hover:text-[#00f0ff] transition-colors duration-200"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-2">
                <span className="text-sm text-white/20">
                    &copy; {new Date().getFullYear()} Doodle Space. All rights reserved.
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/20">
                    Made with <Heart className="text-red-400/60 w-3.5 h-3.5" /> by Yuvraj
                </span>
            </div>
        </footer>
    );
}
