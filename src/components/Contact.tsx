import { Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ContactProps {
  onOpenContact?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenContact }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message Escale de ${name || 'Visiteur'}`;
    const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:dera.ah.14@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 bg-slate-50 relative"
    >
      <div className="mocha-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-5 shadow-xs">
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
              Prendre Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Discutons de votre Projet
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
            Disponible pour missions de développement full-stack, applications mobiles et consulting en architecture logicielle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">

          {/* Contact info & Modal quick button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {onOpenContact && (
              <div className="oneui-card p-5 sm:p-6 bg-slate-900 text-white border-slate-900 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Modal Interactif</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Souhaitez-vous soumettre directement les détails d'un projet via notre formulaire interactif ?
                </p>
                <button
                  onClick={onOpenContact}
                  className="mt-1 py-2.5 px-4 bg-white text-slate-900 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors cursor-pointer w-full text-center"
                >
                  Ouvrir le Formulaire Projet
                </button>
              </div>
            )}

            <div className="oneui-card p-5 sm:p-6 flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-800">
                <Mail size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="oneui-label text-xs">Courrier Électronique</p>
                <a
                  href="mailto:dera.ah.14@gmail.com"
                  className="text-sm sm:text-base font-bold text-slate-900 hover:text-slate-600 transition-colors truncate block"
                >
                  dera.ah.14@gmail.com
                </a>
              </div>
            </div>

            <div className="oneui-card p-5 sm:p-6">
              <p className="oneui-label text-xs">Temps de Réponse Attendu</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">
                Sous 24–48h ouvrées
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 flex flex-col gap-6"
          >
            <div>
              <label className="oneui-label text-xs">Votre Nom / Organisation</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="oneui-input text-base"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="oneui-label text-xs">Adresse E-mail</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="oneui-input text-base"
                placeholder="jane@example.com"
                required
              />
            </div>
            <div>
              <label className="oneui-label text-xs">Détails de l'Escale / Projet</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="oneui-input text-base resize-none"
                placeholder="Décrivez vos besoins ou objectifs..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="oneui-btn-primary px-7 py-3.5 text-sm sm:text-base cursor-pointer border-none inline-flex items-center justify-center gap-2 self-start w-full sm:w-auto"
            >
              <span>Envoyer le Message</span>
              <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>

      <div className="mocha-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Contact;
