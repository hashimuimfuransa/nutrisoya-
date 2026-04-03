import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">Nutrisoya</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t.hero.subtitle}
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">
              {t.footer.links}
            </h3>
            <ul className="space-y-4">
              {Object.entries(t.nav).map(([key, value]) => (
                <li key={key}>
                  <Link
                    to={key === 'home' ? '/' : `/${key}`}
                    className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">
              {t.contact.title}
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-sm font-medium">+250 788 000 000</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-sm font-medium">info@nutrisoya.rw</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">
              Newsletter
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Get healthy tips and new product updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="bg-gray-800 border-none rounded-l-xl px-4 py-3 text-sm w-full focus:ring-1 focus:ring-primary outline-none"
                />
                <button className="bg-primary px-4 py-3 rounded-r-xl hover:bg-primary/90 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Nutrisoya. {t.footer.rights}
          </p>
          <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
