import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { Leaf, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const t = translations[language].nav;

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.products, path: '/products' },
    { name: t.contact, path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Nutrisoya</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide uppercase transition-all hover:text-primary relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'rw' : 'en')}
              className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors border-l border-gray-200 pl-8"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'RW' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium rounded-lg ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'rw' : 'en');
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-4 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-lg flex items-center space-x-2"
              >
                <Globe className="h-5 w-5" />
                <span>{language === 'en' ? 'Kinyarwanda' : 'English'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
