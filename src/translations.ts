import { Language, Product, Translation } from './types';

export const products: Product[] = [
  {
    id: 'soya-milk',
    name: { en: 'Soya Milk', rw: 'Amata ya Soya' },
    description: { en: 'Pure, creamy, and nutritious soya milk.', rw: 'Amata ya soya meza kandi afite intungamubiri.' },
    benefits: { 
      en: ['Lactose-free', 'High in calcium', 'Low in fat'], 
      rw: ['Nta mata arimo', 'Afite kalisiyumu nyinshi', 'Afite ibinure bike'] 
    },
    price: '1,000 RWF',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'soya-meat',
    name: { en: 'Soya Meat (Tofu)', rw: 'Inyama za Soya (Tofu)' },
    description: { en: 'Versatile and protein-rich soya meat.', rw: 'Inyama za soya zikungahaye kuri poroteyine.' },
    benefits: { 
      en: ['High protein', 'Zero cholesterol', 'Easy to cook'], 
      rw: ['Poroteyine nyinshi', 'Nta kolesiteroli', 'Zoroshye guteka'] 
    },
    price: '2,500 RWF',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tofu-sambusa',
    name: { en: 'Tofu Sambusa', rw: 'Sambusa za Tofu' },
    description: { en: 'Crispy and delicious soya-filled sambusas.', rw: 'Sambusa zirimo tofu ziryoshye cyane.' },
    benefits: { 
      en: ['Great snack', 'Healthy filling', 'Crispy texture'], 
      rw: ['Ifunguro ryoroshye', 'Ibirimo bifite ubuzima', 'Zirimo uburyohe'] 
    },
    price: '500 RWF',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb01793?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tofu-burger',
    name: { en: 'Tofu Burger', rw: 'Burger ya Tofu' },
    description: { en: 'A healthy alternative to traditional burgers.', rw: 'Ubundi buryo bwiza bwo kurya burger.' },
    benefits: { 
      en: ['Plant-based', 'Nutritious', 'Satisfying'], 
      rw: ['Ikomoka ku bimera', 'Ifite intungamubiri', 'Irahaza'] 
    },
    price: '3,500 RWF',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'soya-tea',
    name: { en: 'Soya Tea', rw: 'Icyayi cya Soya' },
    description: { en: 'Refreshing and aromatic soya tea.', rw: 'Icyayi cya soya gitanga imbaraga.' },
    benefits: { 
      en: ['Antioxidants', 'Calming', 'Natural flavor'], 
      rw: ['Antiyogisida', 'Gituza umubiri', 'Uburyohe bw\'umwimerere'] 
    },
    price: '800 RWF',
    image: 'https://images.unsplash.com/photo-1544787210-2827448636b2?auto=format&fit=crop&q=80&w=800'
  }
];

export const translations: Record<Language, Translation> = {
  en: {
    nav: { home: 'Home', about: 'About', products: 'Products', contact: 'Contact' },
    hero: {
      title: 'Healthy Living Starts with Soya 🌱',
      subtitle: 'Fresh, affordable, and locally produced soya products using modern processing technology',
      orderNow: 'Order Now (WhatsApp)',
      viewProducts: 'Explore Products'
    },
    benefits: {
      title: 'Benefits of Soya',
      highProtein: 'High Protein',
      heartHealthy: 'Heart Healthy',
      costEffective: 'Affordable',
      naturalSafe: 'Natural & Safe'
    },
    production: {
      title: 'How We Produce High-Quality Soya Products',
      text: 'We use modern machines to ensure hygiene, quality, and efficiency in every product.',
      steps: {
        selection: 'Soya selection 🌱',
        cleaning: 'Cleaning & processing ⚙️',
        production: 'Machine production 🏭',
        packaging: 'Packaging 📦'
      }
    },
    whyChoose: {
      title: 'Why Choose Us',
      points: [
        'Modern production machines',
        'High hygiene standards',
        'Affordable pricing',
        'Locally made (Rwanda 🇷🇼)',
        'Nutritious and healthy'
      ]
    },
    cta: {
      title: 'Start Eating Healthy Today 🌱',
      button: 'Order on WhatsApp'
    },
    about: {
      title: 'About Nutrisoya',
      mission: 'Improving food diet and cost effectiveness through Soya products promotion.',
      vision: 'To be the leading provider of affordable and nutritious soya-based foods in the region.',
      whyChoose: 'Why Choose Nutrisoya?'
    },
    contact: {
      title: 'Contact Us',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      send: 'Send Message',
      whatsapp: 'Order on WhatsApp'
    },
    footer: {
      rights: 'All rights reserved.',
      links: 'Quick Links',
      social: 'Follow Us'
    }
  },
  rw: {
    nav: { home: 'Ahabanza', about: 'Ibitwerekeye', products: 'Ibicuruzwa', contact: 'Twandikire' },
    hero: {
      title: 'Ubuzima bwiza butangirira kuri Soya 🌱',
      subtitle: 'Ibicuruzwa bya soya bishya, bihendutse, kandi bikorerwa iwacu hifashishijwe ikoranabuhanga rigezweho',
      orderNow: 'Tumiza ubu (WhatsApp)',
      viewProducts: 'Reba ibicuruzwa'
    },
    benefits: {
      title: 'Akamaro ka Soya',
      highProtein: 'Poroteyine nyinshi',
      heartHealthy: 'Nziza ku mutima',
      costEffective: 'Irahendutse',
      naturalSafe: 'Umwimerere & Umutekano'
    },
    production: {
      title: 'Uko dutunganya ibicuruzwa bya Soya byiza',
      text: 'Twifashisha imashini zigezweho kugira ngo tugire isuku, ubuziranenge, n\'uburyohe mu bicuruzwa byacu byose.',
      steps: {
        selection: 'Guhitamo soya 🌱',
        cleaning: 'Isuku no gutunganya ⚙️',
        production: 'Gutunganya n\'imashini 🏭',
        packaging: 'Gupakira 📦'
      }
    },
    whyChoose: {
      title: 'Kuki wahitamo Nutrisoya',
      points: [
        'Imashini zigezweho',
        'Isuku yo ku rwego rwo hejuru',
        'Ibiciro biri hasi',
        'Bikorerwa mu Rwanda (🇷🇼)',
        'Bifite intungamubiri n\'ubuzima'
      ]
    },
    cta: {
      title: 'Tangira kurya neza uyu munsi 🌱',
      button: 'Tumiza kuri WhatsApp'
    },
    about: {
      title: 'Ibyerekeye Nutrisoya',
      mission: 'Kuvugurura imirire no kugabanya ikiguzi binyuze mu guteza imbere ibicuruzwa bya soya.',
      vision: 'Kuba umuyobozi mu gutanga ibiribwa bya soya bihendutse kandi bifite intungamubiri mu karere.',
      whyChoose: 'Kuki wahitamo Nutrisoya?'
    },
    contact: {
      title: 'Twandikire',
      formName: 'Izina',
      formEmail: 'Imeri',
      formMessage: 'Ubutumwa',
      send: 'Ohereza ubutumwa',
      whatsapp: 'Tumiza kuri WhatsApp'
    },
    footer: {
      rights: 'Uburenganzira bwose burasigasirwa.',
      links: 'Imiyoboro yihuse',
      social: 'Tukurikire'
    }
  }
};
