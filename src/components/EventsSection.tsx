import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import img1 from "@/assets/intermodal-2023.jpg";
import img2 from "@/assets/intermodal-ctnr-2023.jpg";
import img3 from "@/assets/porto-itb-reicon.jpg";
import img4 from "@/assets/treinamento-comercial-2022.jpg";
import img5 from "@/assets/visita-cd-mateus-2017.jpg";

const captions = {
  pt: [
    "Participação na Intermodal South America 2023, em São Paulo, um dos principais eventos do setor de logística, transporte e comércio exterior.",
    "Presença profissional na Intermodal 2023, reforçando atuação conectada ao ambiente logístico, operações intermodais e networking setorial.",
    "Atuação em ambiente operacional e portuário, com vivência prática ligada à logística, movimentação e operações.",
    "Registro de treinamento comercial, reforçando experiência com desenvolvimento de equipes, alinhamento estratégico e capacitação profissional.",
    "Visita técnica a centro de distribuição, evidenciando vivência prática em armazenagem, operação logística e fluxo de abastecimento.",
  ],
  en: [
    "Participation in Intermodal South America 2023 in São Paulo, one of the leading events in logistics, transportation, and foreign trade.",
    "Professional presence at Intermodal 2023, reinforcing strong connection with logistics, intermodal operations, and industry networking.",
    "Professional experience in an operational and port environment, with practical exposure to logistics, cargo movement, and operations.",
    "Commercial training moment, highlighting experience in team development, strategic alignment, and professional capability building.",
    "Technical visit to a distribution center, demonstrating practical exposure to warehousing, logistics operations, and supply flow routines.",
  ],
};

const EventsSection = () => {
  const { t, lang } = useLang();
  const caps = captions[lang];
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("events.title")}</h2>
          <p className="section-subtitle">{t("events.subtitle")}</p>
          <div className="gold-line" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group overflow-hidden rounded-lg ${i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted rounded-lg">
                <img
                  src={img}
                  alt={caps[i]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 font-medium leading-snug">{caps[i]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
