import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

import logoAxis from "@/assets/logos/axis-shipping.png";
import logoReicon from "@/assets/logos/grupo-reicon.png";
import logoSuporte from "@/assets/logos/suporte-smart.png";
import logoMateus from "@/assets/logos/grupo-mateus.png";
import logoLugpet from "@/assets/logos/lugpet.png";
import logoNA from "@/assets/logos/na-consultores.png";
import logoAutoPosto from "@/assets/logos/auto-posto.png";
import logoBiopalma from "@/assets/logos/biopalma.png";
import logoMSC from "@/assets/logos/msc.png";
import logoGoverno from "@/assets/logos/governo-para.png";
import logoSinobras from "@/assets/logos/sinobras.png";
import logoLBH from "@/assets/logos/lbh-group.png";
import logoTramontina from "@/assets/logos/tramontina.png";
import logoPonte from "@/assets/logos/grupo-ponte.png";
import logoWilson from "@/assets/logos/wilson-sons.png";

const companies = [
  { name: "Axis Shipping World Cargo", logo: logoAxis },
  { name: "Grupo Reicon", logo: logoReicon },
  { name: "Suporte Smart", logo: logoSuporte },
  { name: "Grupo Mateus", logo: logoMateus },
  { name: "Lugpet / Duelo", logo: logoLugpet },
  { name: "N&A Consultores", logo: logoNA },
  { name: "Auto Posto Camaleão", logo: logoAutoPosto },
  { name: "Biopalma da Amazônia", logo: logoBiopalma },
  { name: "MSC – Mediterranean Shipping", logo: logoMSC },
  { name: "Governo do Estado do Pará", logo: logoGoverno },
  { name: "Sinobras", logo: logoSinobras },
  { name: "LBH Group", logo: logoLBH },
  { name: "Tramontina", logo: logoTramontina },
  { name: "Grupo Ponte Irmão – Esplanada", logo: logoPonte },
  { name: "Wilson Sons", logo: logoWilson },
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
              key={company.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="flex flex-col items-center justify-center p-4 border border-border rounded-lg bg-card text-center hover:shadow-md transition-shadow min-h-[120px] gap-2"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-xs font-medium text-muted-foreground leading-tight">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
