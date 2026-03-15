import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const results = {
  pt: [
    "Expansão da carteira de clientes em novas regiões e estados, gerando crescimento de receita e market share",
    "Negociação e fechamento de contratos estratégicos com grandes contas corporativas",
    "Estruturação de operações comerciais com implementação de CRM, pipeline e métricas de performance",
    "Desenvolvimento de fornecedores nacionais e internacionais com redução de custos operacionais",
    "Gestão de importações complexas envolvendo múltiplos países e fornecedores",
    "Estruturação e gestão de operação de franquia com expansão via marketing digital",
    "Integração entre áreas comercial, compras e supply chain para maior eficiência",
    "Fidelização de Key Accounts com aumento de LTV e retenção de grandes contas",
    "Coordenação de equipes de importação e compras em ambientes industriais e logísticos",
    "Representação empresarial em feiras internacionais e negociações globais",
  ],
  en: [
    "Client portfolio expansion across new regions and states, driving revenue growth and market share",
    "Negotiation and closing of strategic contracts with major corporate accounts",
    "Structuring commercial operations with CRM, pipeline, and performance metrics implementation",
    "National and international supplier development with operational cost reduction",
    "Management of complex import operations across multiple countries and suppliers",
    "Franchise operation structuring and expansion through digital marketing strategies",
    "Integration of commercial, procurement, and supply chain functions for greater efficiency",
    "Key Account retention and loyalty with increased LTV and major account preservation",
    "Coordination of import and procurement teams in industrial and logistics environments",
    "Corporate representation at international trade fairs and global negotiations",
  ],
};

const ResultsSection = () => {
  const { t, lang } = useLang();
  const data = results[lang];

  return (
    <section className="section-padding bg-navy">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title !text-primary-foreground">{t("results.title")}</h2>
          <p className="section-subtitle !text-primary-foreground/60">{t("results.subtitle")}</p>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-primary-foreground/5"
            >
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-foreground/80">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
