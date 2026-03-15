import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { key: "nav.about", href: "#about" },
  { key: "nav.expertise", href: "#expertise" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.international", href: "#international" },
  { key: "nav.education", href: "#education" },
  { key: "nav.contact", href: "#contact" },
];

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-lg font-semibold text-foreground tracking-tight">
          RP
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-4 border border-border rounded-full px-1 py-0.5">
            <button
              onClick={() => setLang("pt")}
              className={`text-xs px-2.5 py-1 rounded-full transition-all ${
                lang === "pt" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs px-2.5 py-1 rounded-full transition-all ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5">
            <button
              onClick={() => setLang("pt")}
              className={`text-xs px-2 py-0.5 rounded-full transition-all ${
                lang === "pt" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs px-2 py-0.5 rounded-full transition-all ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
