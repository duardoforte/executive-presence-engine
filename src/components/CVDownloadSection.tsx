import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CVDownloadSection = () => {
  const { t } = useLang();

  return (
    <section className="py-16 bg-navy">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/cv/Curriculo_Rodrigo_Pinheiro_PT.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            {t("cv.pt")}
          </a>
          <a
            href="/cv/Rodrigo_Pinheiro_CV_EN.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-colors"
          >
            <Download size={16} />
            {t("cv.en")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CVDownloadSection;
