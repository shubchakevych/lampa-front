import { getItem } from './local-storage';
import { languagesList } from '../constants/language';

const checkLanguageForAvailability = (language = '') => {
	const isAvailable = Object.keys(languagesList).includes(language);
	return isAvailable ? languagesList[language] : languagesList['en'];
};

export const getLanguage = () => {
	const browserLanguage = window.navigator.language;
	const selectedLanguage = getItem('language');
	const language = selectedLanguage || browserLanguage;

	return checkLanguageForAvailability(language.substring(0, 2));
};
