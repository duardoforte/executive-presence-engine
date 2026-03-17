import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import img1 from "@/assets/intermodal-2023.jpg";
import img2 from "@/assets/intermodal-ctnr-2023.jpg";
import img3 from "@/assets/porto-itb-reicon.jpg";
import img4 from "@/assets/treinamento-comercial-2022.jpg";
import img5 from "@/assets/visita-cd-mateus-2017.jpg";
import img6 from "@/assets/nn-logistica-2025.jpg";

const events = {
  pt: [
    {
      img: img1,
      title: "Intermodal South America 2023",
      desc: "Participação na Intermodal South America 2023, em São Paulo, um dos principais eventos do setor de logística, transporte e comércio exterior.",
      alt: "Rodrigo Pinheiro na Intermodal South America 2023 em São Paulo",
    },
    {
      img: img2,
      title: "Intermodal 2023",
      desc: "Presença profissional na Intermodal 2023, reforçando atuação conectada ao ambiente logístico, operações intermodais e networking setorial.",
      alt: "Rodrigo Pinheiro em ambiente de feira na Intermodal 2023",
    },
    {
      img: img3,
      title: "Operação Portuária",
      desc: "Atuação em ambiente operacional e portuário, com vivência prática ligada à logística, movimentação e operações.",
      alt: "Rodrigo Pinheiro em ambiente operacional portuário",
    },
    {
      img: img4,
      title: "Treinamento Comercial",
      desc: "Registro de treinamento comercial, reforçando experiência com desenvolvimento de equipes, alinhamento estratégico e capacitação profissional.",
      alt: "Rodrigo Pinheiro em treinamento comercial com equipe",
    },
    {
      img: img5,
      title: "Visita a Centro de Distribuição",
      desc: "Visita técnica a centro de distribuição, evidenciando vivência prática em armazenagem, operação logística e fluxo de abastecimento.",
      alt: "Rodrigo Pinheiro em visita técnica a centro de distribuição",
    },
    {
      img: img6,
      title: "Feira NN Logística",
      desc: "Participação na Feira NN Logística, realizada em maio de 2025.",
      alt: "Rodrigo Pinheiro na Feira NN Logística em maio de 2025",
    },
  ],
  en: [
    {
      img: img1,
      title: "Intermodal South America 2023",
      desc: "Participation in Intermodal South America 2023 in São Paulo, one of the leading events in logistics, transportation, and foreign trade.",
      alt: "Rodrigo Pinheiro at Intermodal South America 2023 in São Paulo",
    },
    {
      img: img2,
      title: "Intermodal 2023",
      desc: "Professional presence at Intermodal 2023, reinforcing strong connection with logistics, intermodal operations, and industry networking.",
      alt: "Rodrigo Pinheiro in a trade fair environment at Intermodal 2023",
    },
    {
      img: img3,
      title: "Port Operations",
      desc: "Professional experience in an operational and port environment, with practical exposure to logistics, cargo movement, and operations.",
      alt: "Rodrigo Pinheiro in a port operations environment",
    },
    {
      img: img4,
      title: "Commercial Training",
      desc: "Commercial training moment, highlighting experience in team development, strategic alignment, and professional capability building.",
      alt: "Rodrigo Pinheiro during a commercial training session with team members",
    },
    {
      img: img5,
      title: "Distribution Center Visit",
      desc: "Technical visit to a distribution center, demonstrating practical exposure to warehousing, logistics operations, and supply flow routines.",
      alt: "Rodrigo Pinheiro during a technical visit to a distribution center",
    },
    {
      img: img6,
      title: "NN Logistics Fair",
      desc: "Participation in the NN Logistics Fair, held in May 2025.",
      alt: "Rodrigo Pinheiro at the NN Logistics Fair in May 2025",
    },
  ],
};

const EventsSection = () => {
  const { t, lang } = useLang();
  const items = events[lang];

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
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted rounded-lg">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-display font-semibold text-foreground mt-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 font-medium leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
