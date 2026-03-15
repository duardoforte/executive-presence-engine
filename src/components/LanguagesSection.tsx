import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const langs = {
  pt: [
    { name: "Português", level: "Nativo", pct: 100 },
    { name: "Inglês", level: "Fluente", pct: 95 },
    { name: "Espanhol", level: "Intermediário", pct: 55 },
  ],
  en: [
    { name: "Portuguese", level: "Native", pct: 100 },
    { name: "English", level: "Fluent", pct: 95 },
    { name: "Spanish", level: "Intermediate", pct: 55 },
  ],
};

const LanguagesSection = () => {
  const { t, lang } = useLang();
  const data = langs[lang];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("languages.title")}</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="max-w-lg mt-12 space-y-6">
          {data.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Globe size={14} className="text-accent" />
                  {l.name}
                </span>
                <span className="text-xs text-muted-foreground">{l.level}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
