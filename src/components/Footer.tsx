import { useLang } from "@/lib/i18n";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t, lang, setLang } = useLang();

  return (
    <footer className="bg-navy py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-primary-foreground">
              Rodrigo Bandeira Pinheiro
            </p>
            <p className="text-xs text-primary-foreground/50 mt-1">
              © {new Date().getFullYear()} {t("footer.rights")}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:rpinheiro.brazil@gmail.com"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-bandeira-pinheiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
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
    </footer>
  );
};

export default Footer;
