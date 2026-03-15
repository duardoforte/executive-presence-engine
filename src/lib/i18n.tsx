import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "pt" | "en";

type Translations = {
  [key: string]: { pt: string; en: string };
};

const t: Translations = {
  // Nav
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.expertise": { pt: "Expertise", en: "Expertise" },
  "nav.experience": { pt: "Experiência", en: "Experience" },
  "nav.international": { pt: "Internacional", en: "International" },
  "nav.education": { pt: "Formação", en: "Education" },
  "nav.contact": { pt: "Contato", en: "Contact" },

  // Hero
  "hero.title": { pt: "Rodrigo Bandeira Pinheiro", en: "Rodrigo Bandeira Pinheiro" },
  "hero.subtitle": {
    pt: "Executivo Comercial | Desenvolvimento de Negócios | Supply Chain & Comércio Exterior",
    en: "Commercial Executive | Business Development | Supply Chain & International Trade",
  },
  "hero.tagline": {
    pt: "+20 anos transformando desafios comerciais em resultados sustentáveis para organizações no Brasil e no exterior.",
    en: "+20 years turning commercial challenges into sustainable results for organizations in Brazil and abroad.",
  },
  "hero.cta.experience": { pt: "Ver Experiência", en: "View Experience" },
  "hero.cta.cv": { pt: "Download CV", en: "Download CV" },
  "hero.cta.contact": { pt: "Entre em Contato", en: "Contact Me" },

  // About
  "about.title": { pt: "Sobre Mim", en: "About Me" },
  "about.p1": {
    pt: "Administrador com habilitação em Comércio Exterior e mais de 20 anos de experiência em Gestão Comercial, Desenvolvimento de Negócios e Negociação Estratégica, atuando em ambientes B2B, indústria, logística e operações internacionais. Possui MBA em Logística pela Faci (Faculdade Ideal / Wyden), MBA em Gestão Empresarial pela FGV e MBA em Vendas, Negociação e Resultados de Alta Performance pela PUC/RS.",
    en: "Business Administrator with a degree in International Trade and more than 20 years of experience in Commercial Management, Business Development and Strategic Negotiation, working in B2B environments, industry, logistics and international operations. Holds an MBA in Logistics from Faci (Faculdade Ideal / Wyden), an MBA in Business Management from FGV and an MBA in Sales, Negotiation and High Performance Results from PUC/RS.",
  },
  "about.p2": {
    pt: "Executivo com sólida atuação em expansão de mercado, prospecção de novos clientes, gestão de contas estratégicas (Key Accounts), negociação de contratos comerciais e desenvolvimento de parcerias de longo prazo, conduzindo operações comerciais em mercados altamente competitivos.",
    en: "Executive with solid experience in market expansion, client prospecting, Key Account management, commercial contract negotiation and development of long-term partnerships, leading commercial operations in highly competitive markets.",
  },
  "about.p3": {
    pt: "Experiência na estruturação de estratégias comerciais orientadas a crescimento de receita, aumento de market share e desenvolvimento de novos negócios, com forte atuação na gestão de relacionamento com clientes corporativos e stakeholders estratégicos.",
    en: "Experience structuring revenue-driven commercial strategies, increasing market share and developing new business opportunities, with strong performance in corporate relationship management and engagement with strategic stakeholders.",
  },
  "about.p4": {
    pt: "Possui também experiência relevante na integração entre áreas comercial, compras e supply chain, conduzindo negociações estratégicas com fornecedores nacionais e internacionais, gestão de contratos e análise de custos, o que proporciona uma visão ampla da cadeia de valor e maior eficiência nas decisões comerciais.",
    en: "Also experienced in integrating commercial, procurement and supply chain areas, conducting strategic negotiations with national and international suppliers, contract management and cost analysis, providing a broad value chain perspective and greater efficiency in commercial decision-making.",
  },
  "about.p5": {
    pt: "Perfil executivo orientado a resultados, com forte capacidade de negociação, desenvolvimento de negócios, liderança de projetos comerciais e geração de valor para clientes e organizações, atuando de forma estratégica na expansão sustentável das operações.",
    en: "Results-oriented executive with strong negotiation, business development and commercial leadership capabilities, focused on generating value for clients and organizations and supporting sustainable business growth.",
  },

  // Value
  "value.title": { pt: "O Que Eu Entrego", en: "What I Bring" },
  "value.subtitle": {
    pt: "Capacidades práticas que geram impacto real em organizações e negócios.",
    en: "Practical capabilities that create real impact in organizations and businesses.",
  },

  // Expertise
  "expertise.title": { pt: "Áreas de Expertise", en: "Core Expertise" },

  // Experience
  "experience.title": { pt: "Trajetória Profissional", en: "Professional Experience" },

  // Results
  "results.title": { pt: "Resultados & Impacto", en: "Results & Impact" },
  "results.subtitle": {
    pt: "Contribuições tangíveis ao longo de mais de duas décadas de atuação.",
    en: "Tangible contributions across more than two decades of professional practice.",
  },

  // Companies
  "companies.title": { pt: "Empresas Onde Atuei", en: "Companies I Worked With" },

  // International
  "international.title": { pt: "Experiência Internacional", en: "International Experience" },
  "international.subtitle": {
    pt: "Negócios e negociações com fornecedores e parceiros em diversos países.",
    en: "Business dealings and negotiations with suppliers and partners across multiple countries.",
  },

  // Events
  "events.title": { pt: "Feiras & Eventos", en: "Fairs & Events" },
  "events.subtitle": {
    pt: "Participação ativa em feiras internacionais e eventos do setor.",
    en: "Active participation in international trade fairs and industry events.",
  },

  // Education
  "education.title": { pt: "Formação & Certificações", en: "Education & Certifications" },

  // Languages
  "languages.title": { pt: "Idiomas", en: "Languages" },

  // Opportunities
  "opportunities.title": { pt: "Oportunidades", en: "Opportunities" },
  "opportunities.subtitle": {
    pt: "Estou aberto a duas vertentes de colaboração profissional.",
    en: "I am open to two paths of professional collaboration.",
  },
  "opportunities.exec.title": { pt: "Para Recrutadores & Executivos", en: "For Recruiters & Hiring Managers" },
  "opportunities.exec.desc": {
    pt: "Posições executivas ou de liderança sênior em gestão comercial, desenvolvimento de negócios, procurement, supply chain, logística ou comércio exterior. Disponível para realocação e viagens.",
    en: "Executive or senior leadership positions in commercial management, business development, procurement, supply chain, logistics, or international trade. Available for relocation and travel.",
  },
  "opportunities.consulting.title": { pt: "Para Empresas & Parceiros", en: "For Companies & Partners" },
  "opportunities.consulting.desc": {
    pt: "Consultoria comercial, assessoria em procurement e supply chain, desenvolvimento de negócios, expansão de mercado e operações de comércio exterior. Projetos sob medida para desafios reais.",
    en: "Commercial consulting, procurement and supply chain advisory, business development, market expansion, and international trade operations. Tailored solutions for real business challenges.",
  },

  // Contact
  "contact.title": { pt: "Contato", en: "Contact" },
  "contact.subtitle": {
    pt: "Pronto para conversar sobre oportunidades e colaborações.",
    en: "Ready to discuss opportunities and collaborations.",
  },
  "contact.form.name": { pt: "Nome", en: "Name" },
  "contact.form.email": { pt: "E-mail", en: "Email" },
  "contact.form.message": { pt: "Mensagem", en: "Message" },
  "contact.form.send": { pt: "Enviar Mensagem", en: "Send Message" },

  // Footer
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved." },

  // CV download
  "cv.pt": { pt: "CV Português", en: "CV Portuguese" },
  "cv.en": { pt: "CV Inglês", en: "CV English" },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "pt",
  setLang: () => {},
  t: (key: string) => key,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");

  const translate = (key: string): string => {
    const entry = t[key];
    if (!entry) return key;
    return entry[lang] || key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
