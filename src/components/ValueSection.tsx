import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import {
  TrendingUp, Handshake, ShoppingCart, Truck, Globe, Users, Target, BarChart3,
} from "lucide-react";

const items = {
  pt: [
    { icon: TrendingUp, title: "Liderança Comercial", desc: "Gestão de times e estratégias comerciais orientadas a crescimento de receita e market share." },
    { icon: Target, title: "Desenvolvimento de Negócios", desc: "Prospecção, expansão de mercado e construção de pipelines sustentáveis em ambientes B2B." },
    { icon: Handshake, title: "Negociação Estratégica", desc: "Negociação de contratos complexos com clientes corporativos, fornecedores e parceiros." },
    { icon: ShoppingCart, title: "Procurement & Compras", desc: "Gestão de compras nacionais e internacionais, MRO, CAPEX e desenvolvimento de fornecedores." },
    { icon: Truck, title: "Supply Chain & Logística", desc: "Integração entre áreas comercial, compras e supply chain para maior eficiência operacional." },
    { icon: Globe, title: "Comércio Exterior", desc: "Importação, exportação, gestão de câmbio, contratos internacionais e negociação global." },
    { icon: Users, title: "Gestão de Key Accounts", desc: "Retenção e fidelização de grandes contas através de atendimento estratégico e LTV." },
    { icon: BarChart3, title: "Inteligência Comercial", desc: "CRM, Pipeline, Power BI, métricas de performance e indicadores para decisões data-driven." },
  ],
  en: [
    { icon: TrendingUp, title: "Commercial Leadership", desc: "Managing teams and commercial strategies focused on revenue growth and market share." },
    { icon: Target, title: "Business Development", desc: "Prospecting, market expansion, and building sustainable pipelines in B2B environments." },
    { icon: Handshake, title: "Strategic Negotiation", desc: "Negotiating complex contracts with corporate clients, suppliers, and partners." },
    { icon: ShoppingCart, title: "Procurement", desc: "National and international procurement management, MRO, CAPEX, and supplier development." },
    { icon: Truck, title: "Supply Chain & Logistics", desc: "Integration between commercial, procurement, and supply chain for operational efficiency." },
    { icon: Globe, title: "International Trade", desc: "Import, export, foreign exchange management, international contracts, and global negotiation." },
    { icon: Users, title: "Key Account Management", desc: "Retention and loyalty of major accounts through strategic service and long-term value." },
    { icon: BarChart3, title: "Commercial Intelligence", desc: "CRM, Pipeline, Power BI, performance metrics, and KPIs for data-driven decisions." },
  ],
};

const ValueSection = () => {
  const { t, lang } = useLang();
  const data = items[lang];

  return (
    <section className="section-padding bg-light-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("value.title")}</h2>
          <p className="section-subtitle">{t("value.subtitle")}</p>
          <div className="gold-line" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {data.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-executive group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
