import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Linkedin } from "lucide-react";
import profileImg from "@/assets/rodrigo-profile.png";

const Hero = () => {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="section-container relative z-10 py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light mb-4">
              {t("hero.subtitle")}
            </p>
            <p className="text-base text-primary-foreground/60 font-body font-light mb-10 max-w-lg">
              {t("hero.tagline")}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                {t("hero.cta.experience")}
                <ArrowDown size={16} />
              </a>
              <a
                href={lang === "pt" ? "/cv/Curriculo_Rodrigo_Pinheiro_PT.pdf" : "/cv/Rodrigo_Pinheiro_CV_EN.pdf"}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                <Download size={16} />
                {t("hero.cta.cv")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                <Mail size={16} />
                {t("hero.cta.contact")}
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigo-bandeira-pinheiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 border border-primary-foreground/30 text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl">
                <img
                  src={profileImg}
                  alt="Rodrigo Bandeira Pinheiro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
