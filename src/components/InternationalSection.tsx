import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const countries = {
  pt: [
    { name: "China", desc: "30 dias como intérprete e comprador – Guangzhou, Hong Kong, Shenzhen, Fujian" },
    { name: "Estados Unidos", desc: "Feira Internacional de Calçados em Las Vegas – negociações com fornecedores" },
    { name: "Itália", desc: "Negociações com fornecedores industriais" },
    { name: "Alemanha", desc: "Contratos de compras internacionais" },
    { name: "Coreia do Sul", desc: "Fornecedores para indústria siderúrgica" },
    { name: "Suíça", desc: "Contratos internacionais de importação" },
    { name: "Canadá", desc: "Fornecedores de matéria-prima" },
    { name: "Argentina", desc: "Negociações de importação" },
    { name: "Panamá", desc: "Contratos internacionais de comércio" },
  ],
  en: [
    { name: "China", desc: "30-day trip as interpreter and buyer – Guangzhou, Hong Kong, Shenzhen, Fujian" },
    { name: "United States", desc: "International Footwear Fair in Las Vegas – supplier negotiations" },
    { name: "Italy", desc: "Industrial supplier negotiations" },
    { name: "Germany", desc: "International procurement contracts" },
    { name: "South Korea", desc: "Suppliers for the steel industry" },
    { name: "Switzerland", desc: "International import contracts" },
    { name: "Canada", desc: "Raw material suppliers" },
    { name: "Argentina", desc: "Import negotiations" },
    { name: "Panama", desc: "International trade contracts" },
  ],
};

const InternationalSection = () => {
  const { t, lang } = useLang();
  const data = countries[lang];

  return (
    <section id="international" className="section-padding bg-light-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("international.title")}</h2>
          <p className="section-subtitle">{t("international.subtitle")}</p>
          <div className="gold-line" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {data.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="card-executive flex items-start gap-3"
            >
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
