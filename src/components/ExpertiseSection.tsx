import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

const expertiseAreas = {
  pt: [
    "Gestão Comercial", "Vendas B2B", "Desenvolvimento de Negócios", "Procurement",
    "Strategic Sourcing", "Supply Chain", "Logística", "Comércio Exterior",
    "Operações", "Negociação", "Liderança de Equipes", "Desenvolvimento de Mercado",
    "Gestão de Relacionamento", "Planejamento Estratégico", "Key Account Management",
    "CRM & Pipeline", "Análise de Custos", "Gestão de Contratos",
  ],
  en: [
    "Commercial Management", "B2B Sales", "Business Development", "Procurement",
    "Strategic Sourcing", "Supply Chain", "Logistics", "International Trade",
    "Operations", "Negotiation", "Team Leadership", "Market Development",
    "Relationship Management", "Strategic Planning", "Key Account Management",
    "CRM & Pipeline", "Cost Analysis", "Contract Management",
  ],
};

const ExpertiseSection = () => {
  const { t, lang } = useLang();
  const areas = expertiseAreas[lang];

  return (
    <section id="expertise" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("expertise.title")}</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="flex flex-wrap gap-3 mt-12">
          {areas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="inline-block px-5 py-2.5 text-sm font-medium border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
