import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { UserCheck, Building2 } from "lucide-react";

const OpportunitiesSection = () => {
  const { t } = useLang();

  return (
    <section className="section-padding bg-light-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("opportunities.title")}</h2>
          <p className="section-subtitle">{t("opportunities.subtitle")}</p>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-executive border-l-4 border-l-primary"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t("opportunities.exec.title")}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("opportunities.exec.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-executive border-l-4 border-l-accent"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t("opportunities.consulting.title")}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("opportunities.consulting.desc")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
