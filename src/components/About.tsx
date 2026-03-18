import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import fullImg from "@/assets/rodrigo-full.png";

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("about.title")}</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-5"
          >
            <p className="text-base leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{t("about.p2")}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{t("about.p3")}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{t("about.p4")}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{t("about.p5")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-56 h-56 md:w-full md:h-auto md:max-w-xs rounded-xl overflow-hidden shadow-lg group">
              <img
                src={fullImg}
                alt="Rodrigo Pinheiro"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
