import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { roles } from "@/data/experience-data";

const ExperienceSection = () => {
  const { t, lang } = useLang();
  const data = roles[lang];

  return (
    <section id="experience" className="section-padding bg-light-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("experience.title")}</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {data.map((role, i) => (
              <motion.div
                key={`${role.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />

                <div className="card-executive">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">{role.position}</h3>
                      <p className="text-sm text-accent font-medium flex items-center gap-1.5">
                        <Briefcase size={14} />
                        {role.company}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{role.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
