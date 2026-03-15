import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Role {
  company: string;
  position: string;
  period: string;
  bullets: string[];
}

const roles: { pt: Role[]; en: Role[] } = {
  pt: [
    {
      company: "Axis Shipping World Cargo",
      position: "Executivo de Vendas Sênior",
      period: "Out/2024 – Out/2025",
      bullets: [
        "Gestão comercial na prospecção de clientes B2B na região Norte/Nordeste",
        "Análise de estratégias de vendas usando CRM, Pipeline e Power BI",
        "Key Account Management para retenção de grandes contas",
        "Prospecção de clientes em novos estados para maximização de market share",
      ],
    },
    {
      company: "Grupo Reicon – Rebelo Indústria e Comércio de Navegação",
      position: "Gerente Comercial",
      period: "Mar/2021 – Jan/2024",
      bullets: [
        "Gerenciamento da captação de clientes e projetos de expansão comercial",
        "Autonomia para negociação de grandes contas e alavancagem de receita",
        "Gestão de vendas através de CRM, Pipeline e métricas de performance",
        "Gestão de Key Accounts com viagens para fidelização e LTV",
      ],
    },
    {
      company: "Suporte Smart – Franquias",
      position: "Diretor Comercial – Franquias Belém",
      period: "Jan/2019 – Fev/2021",
      bullets: [
        "Estruturação e gestão da operação da franquia em Belém",
        "Expansão da rede de franquias com marketing digital e geração de leads",
        "Gestão do funil comercial e negociações com investidores",
      ],
    },
    {
      company: "Grupo Mateus",
      position: "Comprador",
      period: "Out/2017 – Nov/2018",
      bullets: [
        "Gestão da categoria de bebidas, destilados e energéticos no Pará",
        "Negociação com fornecedores e definição de mix de produtos",
        "Análise de mercado, metas comerciais e planejamento de demanda",
      ],
    },
    {
      company: "Lugpet Distribuidora / Duelo",
      position: "Coordenador de Compras",
      period: "Nov/2015 – Set/2017",
      bullets: [
        "Gestão do departamento de compras do grupo",
        "Implantação de procedimentos de suprimentos no sistema TOTVS",
        "Compras diretas e indiretas, MRO e CAPEX com planejamento de demanda",
      ],
    },
    {
      company: "N&A Consultores e Associados",
      position: "Comprador",
      period: "Mai/2015 – Out/2015",
      bullets: ["Compra de MRO para construção do novo porto da ADM Portos do Pará"],
    },
    {
      company: "Auto Posto Camaleão",
      position: "Diretor Comercial – Proprietário",
      period: "Mai/2014 – Abr/2015",
      bullets: [
        "Gestão geral de RH e faturamento",
        "Gestão de MRO, CAPEX e planejamento de demanda de combustível",
      ],
    },
    {
      company: "Biopalma da Amazônia",
      position: "Analista de Compras Nacional/Internacional",
      period: "Fev/2013 – Abr/2014",
      bullets: [
        "Gestão de compras MRO e insumos para implantação de indústria de óleo de palma",
        "Negociação com fornecedores nacionais e internacionais",
        "Gestão de importação para cinco unidades industriais",
      ],
    },
    {
      company: "MSC – Mediterranean Shipping Company",
      position: "Analista de Documentação e Financeiro",
      period: "Mai/2012 – Fev/2013",
      bullets: [
        "Documentação de importação e exportação do armador",
        "Gestão de contratos com despachantes aduaneiros",
      ],
    },
    {
      company: "Governo do Estado do Pará",
      position: "Coordenação de Mercados Internacionais",
      period: "Mar/2012 – Mai/2012",
      bullets: ["Análise de mercados internacionais e oportunidades de comércio exterior"],
    },
    {
      company: "Sinobras – Siderúrgica Norte Brasil",
      position: "Analista de Compras Internacionais e Nacional",
      period: "Abr/2010 – Jul/2011",
      bullets: [
        "Gestão de importação de insumos industriais",
        "Contratos com fornecedores da China, EUA, Itália, Alemanha e Coreia",
        "Projetos de redução de custos em compras internacionais",
      ],
    },
    {
      company: "Tramontina Belém S/A",
      position: "Comprador Nacional e Internacional",
      period: "Fev/2009 – Set/2009",
      bullets: [
        "Compras de MRO, CAPEX e insumos internacionais para a fábrica",
        "Importação de máquinas e prospecção de fornecedores internacionais",
      ],
    },
    {
      company: "Grupo Ponte Irmão – Esplanada Ind. e Com. de Colchões",
      position: "Coordenador de Importação",
      period: "Abr/2006 – Jan/2009",
      bullets: [
        "Gestão de fretes marítimos, câmbio e cartas de crédito",
        "Contratos com fornecedores de China, Suíça, Canadá, EUA, Itália, Argentina e Panamá",
        "Intérprete e organizador de viagens internacionais para a diretoria",
        "Gestão de equipe de importação",
      ],
    },
    {
      company: "Wilson Sons Agência Marítima",
      position: "Auxiliar de Documentação – Exportação e Importação",
      period: "Jan/2003 – Jan/2006",
      bullets: ["Documentação de importação e exportação, incluindo cabotagem"],
    },
  ],
  en: [
    {
      company: "Axis Shipping World Cargo",
      position: "Senior Sales Executive",
      period: "Oct/2024 – Oct/2025",
      bullets: [
        "B2B commercial management and client prospecting across North/Northeast Brazil",
        "Sales strategy analysis using CRM, Pipeline, and Power BI",
        "Key Account Management for retention of major clients",
        "New market prospecting to maximize market share and revenue",
      ],
    },
    {
      company: "Grupo Reicon – Rebelo Indústria e Comércio de Navegação",
      position: "Commercial Manager",
      period: "Mar/2021 – Jan/2024",
      bullets: [
        "Managed client acquisition and sales expansion projects for revenue growth",
        "Autonomous negotiation of large accounts to increase revenue",
        "Sales management through CRM, pipeline control, and KPI monitoring",
        "Key Account management through frequent visits to ensure customer loyalty",
      ],
    },
    {
      company: "Suporte Smart – Franchising",
      position: "Commercial Director – Belém Franchise",
      period: "Jan/2019 – Feb/2021",
      bullets: [
        "Structured and managed franchise operations in Belém",
        "Franchise network expansion through digital marketing and lead generation",
        "Commercial funnel management and investor negotiations",
      ],
    },
    {
      company: "Grupo Mateus",
      position: "Buyer",
      period: "Oct/2017 – Nov/2018",
      bullets: [
        "Managed beverage, spirits, and energy drink category in Pará",
        "Supplier negotiations and product mix strategy definition",
        "Market analysis, sales target setting, and demand planning",
      ],
    },
    {
      company: "Lugpet Beverage Distribution / Duelo",
      position: "Procurement Coordinator",
      period: "Nov/2015 – Sep/2017",
      bullets: [
        "Managed procurement department within the group",
        "Implemented supply procedures in TOTVS system",
        "Direct and indirect purchases, MRO, and CAPEX with demand planning",
      ],
    },
    {
      company: "N&A Consultores e Associados",
      position: "Buyer",
      period: "May/2015 – Oct/2015",
      bullets: ["MRO procurement for construction of ADM Portos do Pará port"],
    },
    {
      company: "Auto Posto Camaleão",
      position: "Commercial Director – Owner",
      period: "May/2014 – Apr/2015",
      bullets: [
        "General HR and revenue management",
        "MRO and CAPEX procurement with fuel demand planning",
      ],
    },
    {
      company: "Biopalma da Amazônia",
      position: "Procurement Analyst – National/International",
      period: "Feb/2013 – Apr/2014",
      bullets: [
        "MRO and raw materials procurement for palm oil industrial project",
        "National and international supplier negotiations",
        "Import management supporting five industrial units",
      ],
    },
    {
      company: "MSC – Mediterranean Shipping Company",
      position: "Documentation and Finance Analyst",
      period: "May/2012 – Feb/2013",
      bullets: [
        "Import and export documentation management",
        "Customs broker contract management",
      ],
    },
    {
      company: "Government of the State of Pará",
      position: "International Markets Coordination",
      period: "Mar/2012 – May/2012",
      bullets: ["International market analysis and trade development for the state"],
    },
    {
      company: "Sinobras – Siderúrgica Norte Brasil",
      position: "Procurement Analyst",
      period: "Apr/2010 – Jul/2011",
      bullets: [
        "International procurement management for industrial inputs",
        "Supplier contracts with companies from China, USA, Italy, Germany, and Korea",
        "Cost reduction initiatives through strategic global negotiation",
      ],
    },
    {
      company: "Tramontina Belém S/A",
      position: "National and International Buyer",
      period: "Feb/2009 – Sep/2009",
      bullets: [
        "MRO, CAPEX, and international procurement for factory operations",
        "Machinery import and international supplier development",
      ],
    },
    {
      company: "Grupo Ponte Irmão – Esplanada Ind. e Com. de Colchões",
      position: "Import Coordinator",
      period: "Apr/2006 – Jan/2009",
      bullets: [
        "International freight, foreign exchange, and letters of credit management",
        "Contracts with suppliers from China, Switzerland, Canada, USA, Italy, Argentina, and Panama",
        "Interpreter and international trip organizer for executive delegations",
        "Import team management",
      ],
    },
    {
      company: "Wilson Sons Maritime Agency",
      position: "Documentation Assistant – Export & Import",
      period: "Jan/2003 – Jan/2006",
      bullets: ["Import and export documentation including cabotage operations"],
    },
  ],
};

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
