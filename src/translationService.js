// translationService.js
import i18n from 'i18next';

export function loadTranslations(language) {
  return import(`./locales/${language}.json`).then((translationData) => {
    i18n.addResourceBundle(language, 'translation', translationData, true, true);
  });
}
