import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = {
  pt: [
    { type: "mba", title: "MBA em Gestão Empresarial", institution: "FGV – Fundação Getulio Vargas", year: "2026" },
    { type: "mba", title: "MBA em Vendas, Negociação e Resultado de Alta Performance", institution: "PUC/RS", year: "2021" },
    { type: "pos", title: "Pós-graduação em Logística", institution: "Faculdade Ideal (Wyden)", year: "2007" },
    { type: "grad", title: "Administração com Habilitação em Comércio Exterior", institution: "Centro Universitário do Estado do Pará", year: "2005" },
  ],
  en: [
    { type: "mba", title: "MBA in Business Management", institution: "FGV – Fundação Getulio Vargas", year: "2026" },
    { type: "mba", title: "MBA in Sales, Negotiation and High Performance Results", institution: "PUC/RS", year: "2021" },
    { type: "pos", title: "Postgraduate Degree in Logistics", institution: "Faculdade Ideal (Wyden)", year: "2007" },
    { type: "grad", title: "Business Administration – Major in International Trade", institution: "Centro Universitário do Estado do Pará", year: "2005" },
  ],
};

const certs = {
  pt: [
    "Aperfeiçoamento Interpessoal – Dale Carnegie",
    "Desenvolvimento de Compradores / Negociação para Compradores / Gerenciamento de Compras e Suprimentos – IMAM",
    "Erro Zero no Despacho III",
    "Encontros de Comércio Exterior do Pará (1º, 2º e 5º edições)",
  ],
  en: [
    "Interpersonal Development – Dale Carnegie",
    "Procurement Development / Negotiation for Buyers / Supply Management – IMAM",
    "Zero Error in Customs Clearance III",
    "Pará International Trade Conferences (1st, 2nd, and 5th editions)",
  ],
};

const EducationSection = () => {
  const { t, lang } = useLang();
  const edu = education[lang];
  const certList = certs[lang];

  return (
    <section id="education" className="section-padding bg-light-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("education.title")}</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-4">
            {edu.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="card-executive flex items-start gap-4"
              >
                <GraduationCap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.institution}</p>
                  <span className="text-xs text-gold font-mono">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              {lang === "pt" ? "Certificações & Cursos" : "Certifications & Courses"}
            </h3>
            <ul className="space-y-3">
              {certList.map((cert, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  {cert}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
