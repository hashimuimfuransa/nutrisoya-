import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations, products } from '../translations';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Zap, 
  MessageCircle, 
  Settings, 
  Package, 
  Factory, 
  CheckCircle2,
  Quote,
  Leaf
} from 'lucide-react';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Show all 5 products as requested
  const featuredProducts = products;

  const benefits = [
    { icon: Zap, title: t.benefits.highProtein, desc: language === 'en' ? 'Essential for muscle growth and repair.' : 'Ingenzi mu gukura no gusana imikaya.' },
    { icon: Heart, title: t.benefits.heartHealthy, desc: language === 'en' ? 'Lowers cholesterol and supports heart health.' : 'Igabanya kolesiteroli kandi ifasha umutima.' },
    { icon: ShieldCheck, title: t.benefits.costEffective, desc: language === 'en' ? 'Affordable nutrition for the whole family.' : 'Intungamubiri zihendutse ku muryango wose.' },
    { icon: Leaf, title: t.benefits.naturalSafe, desc: language === 'en' ? '100% natural ingredients, no harmful additives.' : 'Ibirungo 100% by\'umwimerere, nta bindi bintu bibi.' },
  ];

  const productionSteps = [
    { icon: Leaf, title: t.production.steps.selection },
    { icon: Settings, title: t.production.steps.cleaning },
    { icon: Factory, title: t.production.steps.production },
    { icon: Package, title: t.production.steps.packaging },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>{language === 'en' ? 'Modern Soya Processing Company' : 'Isosiyete igezweho itunganya Soya'}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => window.open('https://wa.me/250788000000', '_blank')}
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 group"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{t.hero.orderNow}</span>
                </button>
                <Link
                  to="/products"
                  className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  {t.hero.viewProducts}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105"></div>
              {/* Image showing products + machines background */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1565061828021-dd353ba0a2b7?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern Processing"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
                    alt="Nutrisoya Products"
                    className="w-full rounded-xl shadow-2xl border-2 border-white/50 backdrop-blur-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{t.production.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t.production.text}</p>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            {productionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-6 hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto border border-gray-100">
                  <step.icon className="h-10 w-10 text-primary/80" />
                </div>
                <h3 className="font-bold text-gray-900 tracking-tight">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Main Products' : 'Ibicuruzwa byacu by\'ingenzi'}
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full"></div>
          </div>
          <Link to="/products" className="text-primary font-bold hover:underline flex items-center space-x-1">
            <span>{language === 'en' ? 'See all' : 'Reba byose'}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.benefits.title}</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">{t.about.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nutrisoya is dedicated to improving food diet and cost effectiveness through soya products promotion. 
              We combine modern processing technology with natural ingredients to deliver healthy and affordable nutrition.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 text-primary font-bold hover:underline">
              <span>{language === 'en' ? 'Learn more about us' : 'Soma byinshi kuri twe'}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-sm" alt="Healthy" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-sm mt-8" alt="Soya" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513135065346-a098a63a71ee?auto=format&fit=crop&q=80&w=1200" 
                className="rounded-[2rem] shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700" 
                alt="Modern Machines"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{language === 'en' ? 'Certified Quality' : 'Ubuziranenge bwemejwe'}</p>
                    <p className="text-xl font-bold text-gray-900">100% Safe</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">{t.whyChoose.title}</h2>
              <div className="space-y-4">
                {t.whyChoose.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              {t.cta.title}
            </h2>
            <p className="text-lg text-white/80">
              {language === 'en' 
                ? 'Join thousands of families enjoying our nutritious soya products.' 
                : 'Sanga imiryango ibihumbi wishimira ibicuruzwa byacu bya soya bifite intungamubiri.'}
            </p>
            <button
              onClick={() => window.open('https://wa.me/250788000000', '_blank')}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center space-x-3 mx-auto shadow-xl group"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>{t.cta.button}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
