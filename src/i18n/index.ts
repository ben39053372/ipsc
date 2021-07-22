import { createI18n } from 'vue-i18n';
import en from './en.json';

const messages = {
  en,
};

export const i18n = createI18n({
  legacy: false,
  locate: navigator.language,
  messages: messages,
});
