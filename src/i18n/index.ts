import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { global_en_CA } from './en_CA';
import { global_fr_CA } from './fr_CA';

type Resource = {
  common: typeof global_en_CA;
};

type Resources = {
  fr_CA: Resource;
  en_CA: Resource;
};

export type Languages = keyof Resources;

const en_CA: Resource = {
  common: global_en_CA,
};

const fr_CA: Resource = {
  common: global_fr_CA,
};

const resources: Resources = {
  fr_CA: fr_CA,
  en_CA: en_CA,
};

i18next.use(initReactI18next).init({
  fallbackLng: 'en_CA',
  lng: 'en_CA',
  resources,
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

export default i18next;
