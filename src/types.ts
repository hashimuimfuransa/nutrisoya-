export type Language = 'en' | 'rw';

export interface Product {
  id: string;
  name: { en: string; rw: string };
  description: { en: string; rw: string };
  benefits: { en: string[]; rw: string[] };
  price: string;
  image: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    orderNow: string;
    viewProducts: string;
  };
  benefits: {
    title: string;
    highProtein: string;
    heartHealthy: string;
    costEffective: string;
    naturalSafe: string;
  };
  production: {
    title: string;
    text: string;
    steps: {
      selection: string;
      cleaning: string;
      production: string;
      packaging: string;
    };
  };
  whyChoose: {
    title: string;
    points: string[];
  };
  cta: {
    title: string;
    button: string;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
    whyChoose: string;
  };
  contact: {
    title: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    send: string;
    whatsapp: string;
  };
  footer: {
    rights: string;
    links: string;
    social: string;
  };
}
