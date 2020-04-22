import getUserLocales from 'get-user-locale';

let lang = {
  'default': 'en',
  'available': [
    'en'
  ]
}

/**
 * @returns {String} - The default language that will be used to build the webpage
 */
let determineDefaultLang = function () {
  let locales = getUserLocales();

  let return_lang = lang.default;

  if (locales instanceof Array) {
    for (let i = 0; i < locales.length; i++) {
      if (lang.available.includes(locales[i].substring(0, 2).toLowerCase())) {
        return_lang = locales[i];
        break;
      }
    }
  } else {
    if (lang.available.includes(locales.substring(0, 2).toLowerCase())) {
      return_lang = locales.substring(0, 2).toLowerCase();
    }
  }
  
  return return_lang;
}

export default determineDefaultLang