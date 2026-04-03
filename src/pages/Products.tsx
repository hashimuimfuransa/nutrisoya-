import React from 'react';
import { useLanguage } from '../LanguageContext';
import { products } from '../translations';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

const Products = () => {
  const { language } = useLanguage();

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tighter uppercase"
          >
            {language === 'en' ? 'Our Soya Products' : 'Ibicuruzwa byacu bya Soya'}
          </motion.h1>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {language === 'en' 
              ? 'Discover our range of premium, nutritious, and affordable soya-based foods.' 
              : 'Sura urutonde rw\'ibiribwa byacu bya soya byiza, bifite intungamubiri kandi bihendutse.'}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
