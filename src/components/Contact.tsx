import { Mail, Send } from 'lucide-react';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name || 'Portfolio Visitor'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:dera.ah.14@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-2xl font-light">
              Available for architectural consulting, engineering roles, and strategic technical partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {}
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Electronic Mail</h3>
                  <a 
                    href="mailto:dera.ah.14@gmail.com" 
                    className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    dera.ah.14@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Response Expectation</h3>
                <p className="text-gray-900 font-medium">Within 24-48 business hours</p>
              </div>
            </div>

            {}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-gray-900 transition-colors text-gray-900 text-lg placeholder-gray-300"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-gray-900 transition-colors text-gray-900 text-lg placeholder-gray-300"
                  placeholder="jane@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Project Details</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-gray-900 transition-colors text-gray-900 text-lg resize-none placeholder-gray-300"
                  placeholder="Briefly describe your requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gray-900 text-white font-medium py-4 px-8 rounded hover:bg-black transition-colors flex items-center justify-center gap-3 w-full sm:w-auto mt-4"
              >
                <span>Initiate Contact</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
