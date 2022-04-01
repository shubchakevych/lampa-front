import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { getLanguage } from '../utils/language';
import translationEn from './en/index';

const resources = {
	en: {
		translation: translationEn,
	},
};

const initializelanguage = getLanguage();

i18n.use(initReactI18next).init({
	resources,
	lng: initializelanguage.value,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
