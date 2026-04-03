import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const contactInfo = [
    { icon: Phone, title: language === 'en' ? 'Phone' : 'Terefone', value: '+250 788 000 000' },
    { icon: Mail, title: 'Email', value: 'info@nutrisoya.rw' },
    { icon: MapPin, title: language === 'en' ? 'Location' : 'Aho turerereye', value: 'Kigali, Rwanda' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            {t.contact.title}
          </motion.h1>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'en' ? 'Get in Touch' : 'Twandikire'}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {language === 'en' 
                  ? 'Have questions about our products or want to place a bulk order? We are here to help!' 
                  : 'Ufite ibibazo ku bicuruzwa byacu cyangwa urashaka gutumiza byinshi? Turi hano kugira ngo tugufashe!'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{info.title}</h3>
                    <p className="text-gray-500 text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.open('https://wa.me/250788000000', '_blank')}
              className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="h-7 w-7" />
              <span>{t.contact.whatsapp}</span>
            </button>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-3xl h-64 w-full flex items-center justify-center overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-bold text-gray-900">Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-xl border border-gray-50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.formName}</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.formEmail}</label>
                <input
                  type="email"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.formMessage}</label>
                <textarea
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none resize-none"
                  placeholder={language === 'en' ? 'How can we help you?' : 'Twagufasha ute?'}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary/20"
              >
                <Send className="h-5 w-5" />
                <span>{t.contact.send}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
