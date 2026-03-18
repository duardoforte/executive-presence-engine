import { useLang } from "@/lib/i18n";
import { Linkedin, Mail } from "lucide-react";
import brandLogo from "@/assets/brand-logo.jpg";

const Footer = () => {
  const { t, lang, setLang } = useLang();

  return (
    <footer className="bg-navy py-6">
      <div className="section-container">
        <div className="border-t border-primary-foreground/10 pt-6">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Name */}
            <div className="text-left min-w-0">
              <p className="font-display text-sm md:text-base font-semibold text-primary-foreground truncate">
                Rodrigo Bandeira Pinheiro
              </p>
              <p className="text-[10px] text-primary-foreground/50 mt-0.5">
                © {new Date().getFullYear()} {t("footer.rights")}
              </p>
            </div>

            {/* Center: Brand */}
            <div className="flex-shrink-0">
              <img
                src={brandLogo}
                alt="Rodrigo Pinheiro – Personal Brand"
                className="h-10 md:h-12 w-auto rounded opacity-90"
              />
            </div>

            {/* Right: Links + Lang */}
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="mailto:rpinheiro.brazil@gmail.com"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigo-bandeira-pinheiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <div className="flex items-center gap-1 border border-primary-foreground/20 rounded-full px-1 py-0.5">
                <button
                  onClick={() => setLang("pt")}
                  className={`text-xs px-2 py-0.5 rounded-full transition-all ${
                    lang === "pt" ? "bg-primary-foreground/20 text-primary-foreground" : "text-primary-foreground/50"
                  }`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`text-xs px-2 py-0.5 rounded-full transition-all ${
                    lang === "en" ? "bg-primary-foreground/20 text-primary-foreground" : "text-primary-foreground/50"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
