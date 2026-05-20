import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-muted-foreground text-sm text-center md:text-left">
          © {new Date().getFullYear()} Riha Shahzadi. All rights reserved.
        </div>

        <div className="flex items-center gap-6 text-muted-foreground">
          <a
            href="https://github.com/codingwithriha"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-link-github"
            className="hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </a>
          {/* <a
            href="https://github.com/Riha-Laiba-Dev-Studio"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-link-github-org"
            className="hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/riha-shahzadi"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-link-linkedin"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <div className="text-muted-foreground text-sm flex items-center gap-1.5">
          Made with <FaHeart size={14} className="text-red-500 fill-red-500" /> using React &amp; Tailwind CSS
        </div>

      </div>
    </footer>
  );
}
