import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { t, lang } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === "pt" ? "Contato via Website" : "Contact via Website"
    );
    const body = encodeURIComponent(
      `${lang === "pt" ? "Nome" : "Name"}: ${formData.name}\n${lang === "pt" ? "E-mail" : "Email"}: ${formData.email}\n\n${formData.message}`
    );
    window.open(`mailto:rpinheiro.brazil@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="section-subtitle">{t("contact.subtitle")}</p>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <a
              href="mailto:rpinheiro.brazil@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">E-mail</p>
                <p className="text-sm font-medium text-foreground">rpinheiro.brazil@gmail.com</p>
              </div>
            </a>

            <a href="tel:+5591993915555" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{lang === "pt" ? "Telefone" : "Phone"}</p>
                <p className="text-sm font-medium text-foreground">+55 (91) 99391-5555</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rodrigo-bandeira-pinheiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium text-foreground">rodrigo-bandeira-pinheiro</p>
              </div>
            </a>

            <a
              href="https://wa.me/5591993915555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <p className="text-sm font-medium text-foreground">+55 (91) 99391-5555</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">
                {t("contact.form.message")}
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              {t("contact.form.send")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
