export interface Role {
  company: string;
  position: string;
  period: string;
  bullets: string[];
}

export const roles: { pt: Role[]; en: Role[] } = {
  pt: [
    {
      company: "Axis Shipping | World Cargo Brazil",
      position: "Senior Executive Sales",
      period: "Out/2024 – Set/2025",
      bullets: [
        "Prospecção e desenvolvimento de clientes B2B nas regiões Norte e Nordeste para operações de logística internacional e freight forwarding.",
        "Gestão da carteira de clientes estratégicos utilizando CRM, pipeline de vendas e análise de dados comerciais.",
        "Estruturação de propostas comerciais e negociação de fretes internacionais visando aumento de market share e receita.",
        "Desenvolvimento de novos mercados e fortalecimento do relacionamento com clientes corporativos.",
      ],
    },
    {
      company: "Grupo Reicon",
      position: "Gerente Comercial",
      period: "Mar/2021 – Jan/2024",
      bullets: [
        "Gestão das operações comerciais e expansão da carteira de clientes no setor de navegação e logística.",
        "Negociação de contratos estratégicos e gestão de grandes contas (Key Accounts).",
        "Gestão do funil de vendas por meio de CRM, pipeline comercial e indicadores de performance.",
        "Desenvolvimento de estratégias comerciais para crescimento de receita e retenção de clientes.",
      ],
    },
    {
      company: "Suporte Smart",
      position: "Diretor Comercial Franquia Suporte Smart Belém",
      period: "Jan/2019 – Mar/2021",
      bullets: [
        "Estruturação e gestão da operação da franquia em Belém, atuando na prospecção de clientes e desenvolvimento de mercado.",
        "Atuação na expansão nacional da rede de franquias utilizando marketing digital, tráfego pago e geração de leads.",
        "Gestão do funil comercial e negociação com investidores interessados na aquisição de franquias.",
        "Planejamento de demanda e gestão de suprimentos, incluindo importação de peças e componentes.",
      ],
    },
    {
      company: "Grupo Mateus",
      position: "Comprador - Bebidas (Destilados e Energéticos)",
      period: "Out/2017 – Nov/2018",
      bullets: [
        "Gestão da categoria de bebidas, destilados e energéticos nas lojas do Grupo Mateus no estado do Pará.",
        "Negociação com fornecedores e definição de mix de produtos para otimização de vendas e margem.",
        "Planejamento de demanda e definição de metas comerciais da categoria.",
        "Atuação com equipes de loja para aumento do giro de produtos e performance no ponto de venda.",
      ],
    },
    {
      company: "Bebidas Duelo",
      position: "Coordenador de Compras",
      period: "Nov/2015 – Set/2017",
      bullets: [
        "Gestão do departamento de compras e estruturação de processos de suprimentos.",
        "Implantação de controles e procedimentos operacionais no sistema TOTVS.",
        "Gestão de compras MRO, CAPEX e insumos industriais com planejamento de demanda.",
        "Gestão de almoxarifado e controle de insumos operacionais.",
      ],
    },
    {
      company: "N&A Consultores & Associados",
      position: "Comprador",
      period: "Abr/2015 – Out/2015",
      bullets: [
        "Responsável pela aquisição de materiais MRO para implantação do porto da ADM Portos do Pará.",
        "Negociação com fornecedores e gestão de contratos de suprimentos.",
        "Planejamento de compras e controle de abastecimento de materiais.",
        "Interface com áreas operacionais para alinhamento das necessidades do projeto.",
      ],
    },
    {
      company: "Auto Posto Camaleão",
      position: "Coproprietário / Diretor Comercial",
      period: "Jun/2014 – Abr/2015",
      bullets: [
        "Gestão da operação comercial e administrativa do posto de combustíveis.",
        "Gestão de contratos com empresas locais para fornecimento de combustíveis.",
        "Planejamento de compras e negociação com fornecedores para abastecimento.",
        "Gestão financeira e controle de faturamento mensal.",
      ],
    },
    {
      company: "Biopalma Da Amazonia S.A.",
      position: "Analista de Compras Nacionais e Internacionais",
      period: "Fev/2013 – Abr/2014",
      bullets: [
        "Gestão de compras MRO e insumos industriais para implantação da indústria de óleo de palma.",
        "Negociação com fornecedores nacionais e internacionais para aquisição de equipamentos e materiais.",
        "Gestão de contratos e processos de importação junto à área de suprimentos.",
        "Desenvolvimento de fornecedores e análise de custos para otimização de compras.",
      ],
    },
    {
      company: "MSC Mediterranean Shipping Company",
      position: "Analista de Documentação e Financeiro",
      period: "Mai/2012 – Fev/2013",
      bullets: [
        "Gestão de documentação de importação e exportação de cargas marítimas.",
        "Interface com Receita Federal, Marinha Mercante e órgãos reguladores.",
        "Controle de processos de demurrage e registros no sistema operacional da companhia.",
        "Apoio à gestão de contratos com despachantes aduaneiros.",
      ],
    },
    {
      company: "Governo do Estado do Pará",
      position: "Coordenador de Mercados Internacionais",
      period: "Mar/2012 – Mai/2012",
      bullets: [
        "Coleta e análise de dados econômicos e comerciais para inteligência de mercado internacional.",
        "Elaboração de relatórios estratégicos para atração de investimentos ao estado do Pará.",
        "Apoio a projetos de inserção de empresas locais no comércio exterior.",
        "Produção de informações estratégicas para apoio à tomada de decisão governamental.",
      ],
    },
    {
      company: "Auto Posto Camaleão",
      position: "Gerente Geral",
      period: "Ago/2011 – Mar/2012",
      bullets: [
        "Gestão da operação comercial e administrativa do posto de combustíveis.",
        "Gestão de contratos com empresas locais para fornecimento de combustíveis.",
        "Planejamento de compras e negociação com fornecedores para abastecimento.",
        "Gestão financeira e controle de faturamento mensal.",
      ],
    },
    {
      company: "SINOBRAS - Siderúrgica Norte Brasil S.A",
      position: "Analista de Compras Internacionais",
      period: "Abr/2010 – Jul/2011",
      bullets: [
        "Gestão de compras internacionais de insumos industriais para operação siderúrgica.",
        "Negociação com fornecedores globais na China, EUA, Itália, Alemanha e Coreia.",
        "Desenvolvimento de fornecedores e projetos de redução de custos em compras.",
        "Gestão de categorias nacionais com planejamento de demanda.",
      ],
    },
    {
      company: "LBH Group",
      position: "Analista de Documentação",
      period: "Dez/2009 – Mar/2010",
      bullets: [
        "Gestão de documentação marítima para operações portuárias e agenciamento de navios.",
        "Contato com clientes nacionais e internacionais para suporte às operações.",
        "Elaboração de relatórios operacionais para matriz internacional.",
        "Interface com órgãos reguladores e autoridades portuárias.",
      ],
    },
    {
      company: "Tramontina Belém S.A.",
      position: "Analista de Compras Pleno",
      period: "Fev/2009 – Set/2009",
      bullets: [
        "Gestão de compras MRO, CAPEX e insumos industriais para manutenção da fábrica.",
        "Negociação de contratos de serviços e fornecimento com foco em redução de custos.",
        "Importação de equipamentos e prospecção de fornecedores internacionais.",
        "Planejamento de demanda e controle de abastecimento industrial.",
      ],
    },
    {
      company: "Grupo Ponte",
      position: "Coordenador de Exportação e Importação",
      period: "Abr/2006 – Jan/2009",
      bullets: [
        "Gestão de processos de importação e negociação com fornecedores internacionais.",
        "Estruturação de contratos comerciais e operações de câmbio.",
        "Coordenação de equipe de importação e planejamento de compras internacionais.",
        "Organização de viagens comerciais e missões internacionais de prospecção.",
      ],
    },
    {
      company: "Wilson Sons",
      position: "Assistente de Importação e Exportação",
      period: "Jan/2003 – Jan/2006",
      bullets: [
        "Gestão de documentação de importação e exportação de cargas marítimas.",
        "Interface com armadores e clientes para acompanhamento de processos logísticos.",
        "Controle documental de operações de cabotagem e comércio exterior.",
        "Apoio operacional às equipes de logística e comércio exterior.",
      ],
    },
  ],
  en: [
    {
      company: "Axis Shipping | World Cargo Brazil",
      position: "Senior Executive Sales",
      period: "Oct/2024 – Sep/2025",
      bullets: [
        "Developed B2B business opportunities across Northern and Northeastern Brazil for international logistics and freight forwarding operations.",
        "Managed strategic client portfolios (Key Accounts) using CRM tools, sales pipeline management and commercial data analysis.",
        "Structured commercial proposals and negotiated international freight contracts to increase market share and revenue growth.",
        "Strengthened relationships with corporate clients and logistics partners, expanding the company's regional presence.",
      ],
    },
    {
      company: "Grupo Reicon",
      position: "Commercial Manager",
      period: "Mar/2021 – Jan/2024",
      bullets: [
        "Led commercial operations and market expansion strategies within the navigation and logistics sector.",
        "Negotiated strategic contracts and managed major corporate accounts (Key Accounts).",
        "Managed the sales pipeline and CRM performance indicators to monitor business opportunities and conversion rates.",
        "Designed commercial growth strategies focused on revenue expansion and client retention.",
      ],
    },
    {
      company: "Suporte Smart",
      position: "Commercial Director - Suporte Smart Franchise Belém",
      period: "Jan/2019 – Mar/2021",
      bullets: [
        "Structured and managed the commercial operation of the franchise unit, focusing on market development and client acquisition.",
        "Supported the national expansion of the franchise network through digital marketing strategies and lead generation.",
        "Managed commercial pipeline and negotiations with potential franchise investors.",
        "Conducted supply chain planning and procurement, including international sourcing of electronic components and spare parts.",
      ],
    },
    {
      company: "Grupo Mateus",
      position: "Category Buyer - Beverages (Spirits & Energy Drinks)",
      period: "Oct/2017 – Nov/2018",
      bullets: [
        "Managed the beverage category portfolio across Grupo Mateus retail operations in the state of Pará.",
        "Negotiated with suppliers and defined product mix strategies to optimize sales performance and profit margins.",
        "Conducted demand planning and category performance management.",
        "Collaborated with store teams to improve product turnover and point-of-sale performance.",
      ],
    },
    {
      company: "Bebidas Duelo",
      position: "Procurement Coordinator",
      period: "Nov/2015 – Sep/2017",
      bullets: [
        "Managed the procurement department and supply chain processes for operational and industrial materials.",
        "Implemented procurement controls and operational procedures using TOTVS ERP.",
        "Oversaw MRO procurement, CAPEX acquisitions and industrial supply sourcing.",
        "Managed warehouse operations and inventory control for production inputs.",
      ],
    },
    {
      company: "N&A Consultores e Associados",
      position: "Procurement Specialist",
      period: "Apr/2015 – Oct/2015",
      bullets: [
        "Managed MRO procurement activities for the ADM Portos do Pará infrastructure project.",
        "Negotiated supplier contracts and procurement agreements.",
        "Coordinated material supply planning and procurement logistics.",
        "Worked closely with operational teams to align procurement with project requirements.",
      ],
    },
    {
      company: "Auto Posto Camaleão",
      position: "Co-Owner / Commercial Director",
      period: "Jun/2014 – Apr/2015",
      bullets: [
        "Managed the commercial and administrative operations of a fuel retail business.",
        "Negotiated fuel supply contracts with regional corporate clients.",
        "Conducted procurement planning and supplier negotiations.",
        "Oversaw financial operations and revenue control.",
      ],
    },
    {
      company: "Biopalma - Vale",
      position: "Procurement Analyst – National & International",
      period: "Feb/2013 – Apr/2014",
      bullets: [
        "Managed MRO procurement and industrial sourcing for palm oil processing operations.",
        "Negotiated with national and international suppliers for equipment and materials.",
        "Managed contracts and import processes in coordination with supply chain teams.",
        "Developed suppliers and conducted cost analysis for procurement optimization.",
      ],
    },
    {
      company: "MSC Mediterranean Shipping Company",
      position: "Documentation & Financial Analyst",
      period: "May/2012 – Feb/2013",
      bullets: [
        "Managed import and export documentation for maritime cargo operations.",
        "Coordinated with customs authorities and maritime regulatory agencies.",
        "Monitored demurrage processes and operational records.",
        "Supported commercial teams in contract documentation and operational compliance.",
      ],
    },
    {
      company: "Government of Pará",
      position: "International Markets Coordinator",
      period: "Mar/2012 – May/2012",
      bullets: [
        "Conducted economic and commercial intelligence analysis for international trade initiatives.",
        "Produced strategic reports for foreign investment attraction.",
        "Supported local companies in international market entry and export initiatives.",
      ],
    },
    {
      company: "Auto Posto Camaleão",
      position: "General Manager",
      period: "Aug/2011 – Mar/2012",
      bullets: [
        "Managed the commercial and administrative operations of a fuel retail business.",
        "Negotiated fuel supply contracts with regional corporate clients.",
        "Conducted procurement planning and supplier negotiations.",
        "Oversaw financial operations and revenue control.",
      ],
    },
    {
      company: "SINOBRAS - Siderúrgica Norte Brasil S.A",
      position: "International Procurement Analyst",
      period: "Apr/2010 – Jul/2011",
      bullets: [
        "Managed international procurement of industrial materials and operational supplies for steel production operations.",
        "Negotiated with global suppliers across China, USA, Italy, Germany and South Korea, ensuring competitive pricing and reliable supply.",
        "Developed strategic sourcing initiatives and supplier development programs to improve procurement efficiency.",
        "Led cost reduction initiatives and category management strategies, supporting demand planning and supply continuity.",
      ],
    },
    {
      company: "LBH Group",
      position: "Documentation Analyst – Maritime Operations",
      period: "Dec/2009 – Mar/2010",
      bullets: [
        "Managed maritime documentation for port operations and vessel agency services.",
        "Coordinated with national and international clients to support shipping and logistics operations.",
        "Prepared operational and financial reports for the international headquarters.",
        "Maintained communication with port authorities, regulatory agencies and maritime stakeholders to ensure operational compliance.",
      ],
    },
    {
      company: "Tramontina Belém S.A.",
      position: "Procurement Analyst",
      period: "Feb/2009 – Sep/2009",
      bullets: [
        "Managed MRO, CAPEX and industrial supply procurement to support factory maintenance and operational continuity.",
        "Negotiated service agreements and supplier contracts, with a strong focus on cost reduction and procurement efficiency.",
        "Conducted international sourcing and import processes for equipment and industrial materials.",
        "Performed demand planning, supply control and inventory support to ensure continuous industrial operations.",
      ],
    },
    {
      company: "Grupo Ponte",
      position: "Import & Export Coordinator",
      period: "Apr/2006 – Jan/2009",
      bullets: [
        "Managed import and export operations, including supplier negotiations and international procurement processes.",
        "Structured commercial contracts and foreign exchange operations to support international trade transactions.",
        "Coordinated the import team and international purchasing activities, ensuring process efficiency and compliance.",
        "Organized international business trips and supplier prospecting missions to identify new partnership opportunities and expand global sourcing capabilities.",
      ],
    },
    {
      company: "Wilson Sons",
      position: "Import & Export Assistant – Maritime Logistics",
      period: "Jan/2003 – Jan/2006",
      bullets: [
        "Managed import and export documentation for maritime cargo operations, ensuring compliance with international shipping regulations.",
        "Coordinated with shipping lines, freight forwarders and clients to monitor logistics processes and cargo movements.",
        "Performed document control for cabotage and international trade operations, ensuring accuracy and operational efficiency.",
        "Provided operational support to logistics and foreign trade teams, assisting in cargo handling and documentation processes.",
      ],
    },
  ],
};
