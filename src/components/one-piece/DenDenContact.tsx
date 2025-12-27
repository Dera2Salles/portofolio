import { Phone, Send } from 'lucide-react';
import React from 'react';

const DenDenContact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSend = () => {
    const { name, email, message } = formData;
    const projectEmail = "dera.ah.14@gmail.com";
    const subject = `Message de ${name || 'Pirate Anonyme'}`;
    const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:${projectEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-op-dark dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-op-cream rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-4 border-[#3e2723] relative">
            
            {/* Decorative Snail Shell Pattern Background */}
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-op-blue to-transparent"></div>

            {/* Left Side - Visual */}
            <div className="md:w-5/12 bg-gradient-to-br from-op-red to-[#8b0000] p-10 flex flex-col items-center justify-center text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30"></div>
                
                {/* Snail Animation */}
                <div className="relative mb-8 transform scale-125">
                    <div className="w-32 h-32 bg-op-cream rounded-full border-4 border-[#3e2723] flex items-center justify-center relative animate-[bounce_3s_infinite]">
                         <Phone className="w-16 h-16 text-[#3e2723]" />
                         {/* Eyes */}
                         <div className="absolute -top-6 left-2 w-4 h-8 bg-op-cream border-2 border-[#3e2723] rounded-full rotate-[-15deg]">
                            <div className="w-2 h-2 bg-black rounded-full absolute top-1 left-1 animate-ping"></div>
                         </div>
                         <div className="absolute -top-6 right-2 w-4 h-8 bg-op-cream border-2 border-[#3e2723] rounded-full rotate-[15deg]">
                             <div className="w-2 h-2 bg-black rounded-full absolute top-1 right-1 animate-ping"></div>
                         </div>
                    </div>
                    {/* Sound Effect Text */}
                    <div className="absolute -right-8 -top-4 font-black text-op-gold text-xl animate-pulse">
                        <p className="translate-x-2">PURU</p>
                        <p className="translate-y-2">PURU</p>
                        <p className="translate-x-4">PURU</p>
                    </div>
                </div>

                <h2 className="text-3xl font-black uppercase mb-2 text-shadow-lg relative z-10 font-serif tracking-wider">
                    Appelez le Capitaine !
                </h2>
                <p className="text-sm opacity-90 relative z-10 max-w-xs leading-relaxed mb-4">
                    Vous avez une carte vers un trésor caché (projet) ? Ou vous voulez juste rejoindre l'équipage ?
                </p>
                <div className="relative z-10 bg-black/20 p-2 rounded backdrop-blur-sm border border-white/10">
                    <p className="text-xs font-bold text-op-gold uppercase tracking-widest">Email du Capitaine</p>
                    <p className="font-mono text-sm">dera.ah.14@gmail.com</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-7/12 p-8 md:p-12 bg-[#F4E4BC] relative">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" className="w-24 h-24 rotate-12" alt="decoration"/>
                </div>

                <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                    <div className="relative group">
                        <label className="block text-[#3e2723] font-black mb-1 uppercase text-xs tracking-widest pl-1">Nom de Pirate</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-4 bg-white border-2 border-[#3e2723] rounded-sm focus:outline-none focus:ring-4 focus:ring-op-red/20 focus:border-op-red text-[#3e2723] font-bold shadow-[4px_4px_0_#3e2723] transition-all" 
                          placeholder="Votre Nom..." 
                        />
                    </div>
                    <div className="relative group">
                        <label className="block text-[#3e2723] font-black mb-1 uppercase text-xs tracking-widest pl-1">Fréquence (Email)</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-4 bg-white border-2 border-[#3e2723] rounded-sm focus:outline-none focus:ring-4 focus:ring-op-red/20 focus:border-op-red text-[#3e2723] font-bold shadow-[4px_4px_0_#3e2723] transition-all" 
                          placeholder="votre_email@exemple.com" 
                        />
                    </div>
                    <div className="relative group">
                        <label className="block text-[#3e2723] font-black mb-1 uppercase text-xs tracking-widest pl-1">Parchemin de Message</label>
                        <textarea 
                          rows={4} 
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-4 bg-white border-2 border-[#3e2723] rounded-sm focus:outline-none focus:ring-4 focus:ring-op-red/20 focus:border-op-red text-[#3e2723] font-bold shadow-[4px_4px_0_#3e2723] transition-all resize-none" 
                          placeholder="J'ai trouvé le One Piece..."
                        ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-[#3e2723] text-op-gold font-black text-xl py-4 rounded-sm uppercase tracking-widest hover:bg-op-red hover:text-white transition-all duration-300 shadow-[6px_6px_0_#000] active:translate-y-1 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-3 group"
                    >
                        <Send className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        Envoyer le Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DenDenContact;
