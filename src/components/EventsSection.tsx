import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import event1 from "@/assets/rodrigo-event1.png";
import event2 from "@/assets/rodrigo-event2.png";
import event3 from "@/assets/rodrigo-event3.png";

const captions = {
  pt: [
    "Feira de Logística – Manaus, AM",
    "Encontro profissional do setor",
    "Representação comercial – Axis Shipping World Cargo",
  ],
  en: [
    "Logistics Fair – Manaus, AM",
    "Professional industry meeting",
    "Commercial representation – Axis Shipping World Cargo",
  ],
};

const EventsSection = () => {
  const { t, lang } = useLang();
  const caps = captions[lang];
  const images = [event1, event2, event3];

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
              className="group overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={img}
                  alt={caps[i]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 font-medium">{caps[i]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
