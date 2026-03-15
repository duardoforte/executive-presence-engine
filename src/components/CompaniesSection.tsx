import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

const companies = [
  "Axis Shipping World Cargo",
  "Grupo Reicon – Rebelo Ind. e Com. de Navegação",
  "Suporte Smart – Franquias",
  "Grupo Mateus",
  "Lugpet Distribuidora / Duelo",
  "N&A Consultores e Associados",
  "Auto Posto Camaleão",
  "Biopalma da Amazônia",
  "MSC – Mediterranean Shipping",
  "Governo do Estado do Pará",
  "Sinobras – Siderúrgica Norte Brasil",
  "LBH Group – Brazshipping",
  "Tramontina Belém S/A",
  "Grupo Ponte Irmão – Esplanada",
  "Wilson Sons Agência Marítima",
];

const CompaniesSection = () => {
  const { t } = useLang();

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("companies.title")}</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="flex items-center justify-center p-5 border border-border rounded-lg bg-card text-center hover:shadow-md transition-shadow min-h-[80px]"
            >
              <span className="text-sm font-medium text-foreground leading-tight">{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
