export interface Role {
  company: string;
  position: string;
  period: string;
  bullets: string[];
}

export const roles: { pt: Role[]; en: Role[] } = {
  pt: [
    {
      company: "Axis Shipping World Cargo – Norte / Nordeste",
      position: "Executivo de Vendas Sênior",
      period: "Out/2024 – Out/2025",
      bullets: [
        "Gestão comercial na prospecção de clientes B2B;",
        "Criar projeções e quadros comparativos para elaboração de relatórios gerenciais;",
        "Análise de estratégias de vendas e negociações, utilizando ferramentas como CRM e Pipeline e Power Bi;",
        "Manutenção de relacionamento com clientes e acompanhamento da carteira, com gestão direta e acompanhamento diretoria, utilizando Key account management na retenção de grandes contas;",
        "Prospecção de clientes em novos estados, para maximização de market share e receita;",
      ],
    },
    {
      company: "Grupo Reicon – Rebelo Indústria e Comércio de Navegação",
      position: "Gerente Comercial",
      period: "Mar/2021 – Jan/2024",
      bullets: [
        "Gerenciar a captação de clientes, projetos de expansão na área de vendas e alavancagem de receita via canal direto;",
        "Autonomia para negociação de grandes contas para melhor gestão de atendimento e alavancagem de receita;",
        "Gestão de Vendas através de sistema CRM, Pipeline, métricas de performance e gestão de indicadores;",
        "Gestor de contratos com fornecedores, clientes e estudo de demanda intensivos;",
        "Gestão de Key accounts, através de viagens, assegurando a fidelização do LTV dos clientes.",
      ],
    },
    {
      company: "Suporte Smart – Franquias",
      position: "Diretor Comercial – Franquias Belém",
      period: "Jan/2019 – Fev/2021",
      bullets: [
        "Estruturação e gestão da operação da franquia em Belém, atuando na prospecção e desenvolvimento de clientes para serviços de assistência técnica e comercialização de dispositivos e acessórios.",
        "Atuação na expansão da rede de franquias no Brasil, utilizando estratégias de marketing digital, tráfego pago e geração de leads para captação de novos franqueados.",
      ],
    },
    {
      company: "Grupo Mateus",
      position: "Comprador",
      period: "Out/2017 – Nov/2018",
      bullets: [
        "Gestão da categoria de bebidas, destilados e energéticos nas lojas do Grupo no Pará, atuando na negociação com fornecedores e definição de mix de produtos.",
        "Condução de análises de mercado, definição de metas comerciais e planejamento de demanda, garantindo abastecimento adequado e competitividade de preços.",
        "Atuação integrada com equipes comerciais e operacionais para aumento do giro de produtos, execução no ponto de venda e performance de vendas da categoria.",
        "Gestão de suprimentos e definição de sortimento, seções e grades de produtos nas lojas, alinhando estratégia comercial, logística e disponibilidade de estoque.",
      ],
    },
    {
      company: "Lugpet Distribuidora de Bebidas / Duelo",
      position: "Coordenador de Compras",
      period: "Nov/2015 – Set/2017",
      bullets: [
        "Responsável pelo departamento de compras dentro do grupo, exercendo a função Gestor de compras.",
        "Implantação de procedimentos dentro do departamento de suprimentos no sistema Totvs;",
        "Encarregado de controlar compras dos insumos industriais, compras diretas e indiretas, MRO e CAPEX, com planejamento de demanda e análise de custos.",
        "Gestão de almoxarifado, para controle de Insumos.",
      ],
    },
    {
      company: "N&A Consultores e Associados Ltda",
      position: "Comprador",
      period: "Mai/2015 – Out/2015",
      bullets: [
        "Responsável pela compra de MRO referente à construção do novo porto da ADM Portos do Pará;",
      ],
    },
    {
      company: "Auto Posto Camaleão",
      position: "Diretor Comercial – Proprietário",
      period: "Mai/2014 – Abr/2015",
      bullets: [
        "Gestão de RH em geral;",
        "Fechamento mensal do faturamento;",
        "Gestor de MRO, CAPEX, com planejamento de demanda para aquisição de combustível;",
        "Gestor de contratos com empresas locais, para fornecimento de combustível e sobressalentes;",
      ],
    },
    {
      company: "Biopalma Da Amazônia",
      position: "Analista de Compras Nacional/Internacional",
      period: "Fev/2013 – Abr/2014",
      bullets: [
        "Gestão de compras MRO, matérias-primas e insumos industriais para implantação da nova indústria de óleo de palma, incluindo negociação com fornecedores nacionais e internacionais.",
        "Gestão de contratos nacionais e internacionais no caso de equipamentos;",
        "Gestor de importação, juntamente com a gerencia de compras pela importação das cinco unidades.",
      ],
    },
    {
      company: "MSC – Mediterranean Shipping do Brasil Ltda",
      position: "Analista de Documentação e Financeiro",
      period: "Mai/2012 – Fev/2013",
      bullets: [
        "Documentação referente a importação e exportação do armador;",
        "Inserção de dados no sistema da CDP (scap) e contato junto a órgão como RF, Marinha Mercante, controle de demurrage;",
        "Gestão de contratos com despachantes aduaneiros.",
      ],
    },
    {
      company: "Governo do Estado do Pará",
      position: "Coordenação de Mercados Internacionais",
      period: "Mar/2012 – Mai/2012",
      bullets: [
        "Análise de mercados internacionais e oportunidades de comércio exterior, além de relatórios para atração de investimentos.",
      ],
    },
    {
      company: "Sinobras – Siderúrgica Norte Brasil",
      position: "Analista de Compras Internacionais e Nacional",
      period: "Abr/2010 – Jul/2011",
      bullets: [
        "Parte da gestão de importação da Siderúrgica, responsável por insumos internacionais;",
        "Gestão de contratos de compras com fornecedores de diversos países como China, EUA, Itália, Alemanha, Coréia;",
        "Gestão da cadeia e desenvolvimento de fornecedores internacionais e nacionais;",
        "Forte gestão em projetos de redução de custos em compras internacionais, negociação estratégica com fornecedores globais e desenvolvimento de novos fornecedores.",
        "Gestão de categorias nacional: Fixação, filtros e vedações, com desenvolvimento de novos fornecedores e planejamento de demanda.",
      ],
    },
    {
      company: "LBH – Brazshipping Ag Marítima Ltda – LBH Group",
      position: "Departamento de Documentação",
      period: "Dez/2009 – Mar/2010",
      bullets: [
        "Emissão de relatórios para diretoria matriz com controle de navios;",
        "Solucionar problemas junto a órgãos competentes Receita Federal, OGMO, Marinha Mercante.",
      ],
    },
    {
      company: "Tramontina Belém S/A",
      position: "Comprador Nacional e Internacional",
      period: "Fev/2009 – Set/2009",
      bullets: [
        "Gestor de compras de MRO, CAPEX e insumos internacionais para a manutenção da fábrica;",
        "Gestão de contratos de serviços, com planejamento estratégico para redução de custos;",
        "Importação de máquinas e prospecção de novos fornecedores internacionais.",
      ],
    },
    {
      company: "Grupo Ponte Irmão – Esplanada Indústria e Comércio de Colchões Ltda",
      position: "Coordenador de Importação",
      period: "Abr/2006 – Jan/2009",
      bullets: [
        "Cotação de fretes marítimos e fechamento de câmbio;",
        "Gestão de emissão de carta de crédito, na área financeira;",
        "Gestão de fechamento de contratos junto aos fornecedores internacionais com países como China, Suíça, Canadá, EUA, Itália, Argentina e Panamá;",
        "Gestor responsável pela demanda e organização de viagens internacionais, roteiro e intérprete da comitiva.",
        "Responsável pela negociação com os fornecedores sendo a ponte entre o fornecedor e o CEO.",
        "Gestão de equipe de importação, para aquisição de produtos internacionais comercializados no Grupo empresarial.",
      ],
    },
    {
      company: "Wilson Sons Agência Marítima Ltda",
      position: "Auxiliar de Documentação – Exportação e Importação",
      period: "Jan/2003 – Jan/2006",
      bullets: [
        "Responsável pela documentação de importação dos armadores incluindo a documentação de Cabotagem.",
        "Responsável pela documentação de exportação dos clientes vigentes no período;",
      ],
    },
  ],
  en: [
    {
      company: "Axis Shipping World Cargo – North / Northeast",
      position: "Senior Sales Executive",
      period: "Oct/2024 – Oct/2025",
      bullets: [
        "Commercial management focused on B2B client prospecting;",
        "Development of projections and comparative analysis to support management reports;",
        "Analysis of sales strategies and negotiations using tools such as CRM, Pipeline and Power BI;",
        "Client relationship management and portfolio monitoring, working closely with leadership and applying Key Account Management to retain major accounts;",
        "Prospecting clients in new states to maximize market share and revenue;",
      ],
    },
    {
      company: "Grupo Reicon – Rebelo Indústria e Comércio de Navegação",
      position: "Commercial Manager",
      period: "Mar/2021 – Jan/2024",
      bullets: [
        "Managed client acquisition and sales expansion projects aimed at revenue growth through direct channels;",
        "Autonomy to negotiate large accounts to improve service management and increase revenue;",
        "Sales management through CRM systems, pipeline control, performance metrics and KPI monitoring;",
        "Contract management with suppliers and clients, including demand analysis;",
        "Key account management through frequent client visits to ensure customer loyalty and long-term value (LTV);",
      ],
    },
    {
      company: "Suporte Smart – Franchising",
      position: "Commercial Director – Belém Franchise",
      period: "Jan/2019 – Feb/2021",
      bullets: [
        "Structured and managed the franchise operation in Belém, focusing on client acquisition for technical assistance services and device sales;",
        "Participated in the expansion of the franchise network in Brazil through digital marketing strategies, paid traffic and lead generation;",
        "Managed the commercial funnel and negotiations with investors interested in acquiring franchises;",
        "Demand planning and supply management including importation of parts and components for mobile device maintenance;",
        "Corporate contract management for equipment maintenance and technical support for business clients;",
      ],
    },
    {
      company: "Grupo Mateus",
      position: "Buyer",
      period: "Oct/2017 – Nov/2018",
      bullets: [
        "Managed the beverage, spirits and energy drink category in Grupo Mateus stores in the state of Pará;",
        "Negotiated with suppliers and defined product mix strategies;",
        "Conducted market analysis, sales targets definition and demand planning to ensure supply and price competitiveness;",
        "Worked closely with commercial and operational teams to increase product turnover and category performance;",
        "Managed supply planning and assortment definition aligned with logistics and inventory availability;",
      ],
    },
    {
      company: "Lugpet Beverage Distribution / Duelo",
      position: "Procurement Coordinator",
      period: "Nov/2015 – Sep/2017",
      bullets: [
        "Responsible for the procurement department within the group;",
        "Implemented supply procedures within the TOTVS system;",
        "Managed industrial inputs, direct and indirect purchases, MRO and CAPEX procurement with demand planning and cost analysis;",
        "Warehouse management and inventory control for operational supplies;",
      ],
    },
    {
      company: "N&A Consultores e Associados Ltda",
      position: "Buyer",
      period: "May/2015 – Oct/2015",
      bullets: [
        "Responsible for MRO purchases related to the construction of ADM Portos do Pará;",
      ],
    },
    {
      company: "Auto Posto Camaleão",
      position: "Commercial Director – Owner",
      period: "May/2014 – Apr/2015",
      bullets: [
        "General HR management;",
        "Monthly revenue closing and financial monitoring;",
        "Managed MRO and CAPEX procurement including fuel demand planning;",
        "Managed supply contracts with local companies;",
      ],
    },
    {
      company: "Biopalma da Amazônia",
      position: "Procurement Analyst – National / International",
      period: "Feb/2013 – Apr/2014",
      bullets: [
        "Managed procurement of MRO items, raw materials and industrial inputs for the palm oil industrial project;",
        "Negotiated with national and international suppliers for equipment acquisition;",
        "Managed import processes supporting the procurement department;",
      ],
    },
    {
      company: "MSC – Mediterranean Shipping Company do Brasil Ltda",
      position: "Documentation and Finance Analyst",
      period: "May/2012 – Feb/2013",
      bullets: [
        "Managed documentation related to import and export operations;",
        "Inserted operational data in CDP systems and interacted with authorities such as Receita Federal and Maritime authorities;",
        "Managed contracts with customs brokers;",
      ],
    },
    {
      company: "Government of the State of Pará",
      position: "International Markets Coordination",
      period: "Mar/2012 – May/2012",
      bullets: [
        "Collected and analyzed market data to generate strategic information for international trade development and investment attraction for the State of Pará;",
      ],
    },
    {
      company: "Sinobras – Siderúrgica Norte Brasil",
      position: "Procurement Analyst",
      period: "Apr/2010 – Jul/2011",
      bullets: [
        "Participated in the management of international procurement for industrial inputs;",
        "Managed supplier contracts with companies from China, USA, Italy, Germany and Korea;",
        "Developed national and international suppliers and supported supply chain operations;",
        "Led cost reduction initiatives through strategic negotiation with global suppliers;",
      ],
    },
    {
      company: "LBH – Brazshipping Ag Marítima Ltda – LBH Group",
      position: "Documentation Department",
      period: "Dec/2009 – Mar/2010",
      bullets: [
        "Prepared reports for headquarters related to vessel operations;",
        "Solved operational issues with customs and port authorities;",
      ],
    },
    {
      company: "Tramontina Belém S/A",
      position: "National and International Buyer",
      period: "Feb/2009 – Sep/2009",
      bullets: [
        "Responsible for MRO, CAPEX and international procurement for factory maintenance;",
        "Managed service contracts and strategic sourcing for cost reduction;",
        "Imported machinery and developed new international suppliers;",
      ],
    },
    {
      company: "Grupo Ponte Irmão – Esplanada Indústria e Comércio de Colchões Ltda",
      position: "Import Coordinator",
      period: "Apr/2006 – Jan/2009",
      bullets: [
        "Managed international freight quotations and exchange operations;",
        "Managed letters of credit and international financial documentation;",
        "Negotiated contracts with international suppliers from China, Switzerland, Canada, USA, Italy, Argentina and Panama;",
        "Organized international trips and acted as interpreter for company delegations;",
        "Negotiated directly with suppliers acting as liaison with the CEO;",
        "Managed the import team responsible for international product sourcing;",
      ],
    },
    {
      company: "Wilson Sons Maritime Agency Ltda",
      position: "Documentation Assistant – Export and Import",
      period: "Jan/2003 – Jan/2006",
      bullets: [
        "Responsible for shipping import documentation including cabotage operations;",
        "Managed export documentation for clients;",
      ],
    },
  ],
};
