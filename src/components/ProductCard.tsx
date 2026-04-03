import React from 'react';
import { Product } from '../types';
import { useLanguage } from '../LanguageContext';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language } = useLanguage();
  const name = product.name[language];
  const description = product.description[language];
  const benefits = product.benefits[language];

  const handleWhatsApp = () => {
    const message = `Hello Nutrisoya, I would like to order ${name}.`;
    window.open(`https://wa.me/250788000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group"
    >
      <div className="relative h-72 overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-gray-100">
          <span className="text-primary font-bold text-sm tracking-tight">{product.price}</span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{description}</p>
        </div>

        <div className="space-y-2.5 flex-grow">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 text-xs text-gray-600 font-medium">
              <CheckCircle2 className="h-4 w-4 text-primary/70" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg shadow-primary/10 active:scale-95"
        >
          <MessageCircle className="h-5 w-5" />
          <span>{language === 'en' ? 'Order on WhatsApp' : 'Tumiza kuri WhatsApp'}</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
