import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    { icon: ShieldCheck, title: language === 'en' ? 'Quality' : 'Ubuziranenge', desc: language === 'en' ? 'We maintain the highest standards in all our products.' : 'Tugumana urwego rwo hejuru mu bicuruzwa byacu byose.' },
    { icon: Users, title: language === 'en' ? 'Community' : 'Umuryango', desc: language === 'en' ? 'Supporting local farmers and improving community health.' : 'Gushyigikira abahinzi bacu no kuvugurura ubuzima bw\'umuryango.' },
    { icon: Target, title: language === 'en' ? 'Accessibility' : 'Kugerwaho na bose', desc: language === 'en' ? 'Making healthy food affordable for everyone.' : 'Gutuma ibiribwa bifite intungamubiri bigera kuri bose.' },
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
            {t.about.title}
          </motion.h1>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="h-24 w-24 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3 tracking-tight">
                <Target className="h-6 w-6 text-primary" />
                <span>Mission</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {t.about.mission}
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye className="h-24 w-24 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3 tracking-tight">
                <Eye className="h-6 w-6 text-primary" />
                <span>Vision</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {t.about.vision}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3 scale-105"></div>
              <img
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1200"
                alt="Healthy Food"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-square grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.about.whyChoose}</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-gray-100">
                  <value.icon className="h-10 w-10 text-primary/80" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
