import { Mail, Send } from 'lucide-react';
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
    const subject = `Message from ${name || 'Anonymous'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:${projectEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-purple-200/50 dark:border-purple-500/30 relative">
            
            {/* Left Side - Visual */}
            <div className="md:w-5/12 bg-gradient-to-br from-purple-600 to-purple-800 p-10 flex flex-col items-center justify-center text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                
                {/* Icon Animation */}
                <div className="relative mb-8 transform scale-125 z-10">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-full border-2 border-white/30 flex items-center justify-center relative animate-pulse">
                         <Mail className="w-16 h-16 text-white" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold uppercase mb-2 relative z-10">
                    Get In Touch
                </h2>
                <p className="text-sm opacity-90 relative z-10 max-w-xs leading-relaxed mb-4">
                    Have a project in mind? Or just want to connect? Feel free to reach out!
                </p>
                <div className="relative z-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <p className="text-xs font-semibold text-purple-200 uppercase tracking-widest mb-1">Email</p>
                    <p className="font-mono text-sm">dera.ah.14@gmail.com</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-7/12 p-8 md:p-12 relative">
                <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                    <div className="relative group">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">Your Name</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-purple-200 dark:border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all" 
                          placeholder="John Doe" 
                        />
                    </div>
                    <div className="relative group">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">Email Address</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-purple-200 dark:border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all" 
                          placeholder="john@example.com" 
                        />
                    </div>
                    <div className="relative group">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">Message</label>
                        <textarea 
                          rows={4} 
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-purple-200 dark:border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all resize-none" 
                          placeholder="Tell me about your project..."
                        ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold text-lg py-4 rounded-xl uppercase tracking-wide hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-3 group"
                    >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DenDenContact;
