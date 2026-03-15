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
    pt: "Administrador com habilitação em Comércio Exterior e mais de 20 anos de experiência em Gestão Comercial, Desenvolvimento de Negócios e Negociação Estratégica. Atuo em ambientes B2B, indústria, logística e operações internacionais, com três MBAs — em Logística, Gestão Empresarial (FGV) e Vendas de Alta Performance (PUC/RS).",
    en: "Business Administrator with a degree in International Trade and over 20 years of experience in Commercial Management, Business Development, and Strategic Negotiation. I operate across B2B, industrial, logistics, and international operations environments, holding three MBAs — in Logistics, Business Management (FGV), and High Performance Sales (PUC/RS).",
  },
  "about.p2": {
    pt: "Minha trajetória combina liderança comercial com profundo conhecimento em compras, supply chain e comércio exterior. Conduzo operações comerciais em mercados altamente competitivos, com forte atuação em expansão de mercado, gestão de Key Accounts, negociação de contratos e desenvolvimento de parcerias de longo prazo.",
    en: "My career combines commercial leadership with deep expertise in procurement, supply chain, and international trade. I lead commercial operations in highly competitive markets, with a strong track record in market expansion, Key Account management, contract negotiation, and long-term partnership development.",
  },
  "about.p3": {
    pt: "Possuo experiência relevante na integração entre áreas comercial, compras e supply chain, conduzindo negociações estratégicas com fornecedores nacionais e internacionais, proporcionando visão ampla da cadeia de valor e maior eficiência nas decisões comerciais.",
    en: "I bring relevant experience in integrating commercial, procurement, and supply chain functions, leading strategic negotiations with national and international suppliers, providing a broad value chain perspective and greater efficiency in commercial decision-making.",
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
