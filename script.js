const langToggle = document.getElementById('langToggle');
const year = document.getElementById('year');

const savedLang = localStorage.getItem('site-lang');
const browserPrefersZh = navigator.language.toLowerCase().startsWith('zh');
let lang = savedLang || (browserPrefersZh ? 'zh' : 'en');

function applyLanguage(nextLang) {
  lang = nextLang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
    element.textContent = element.dataset[lang];
  });

  langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
  localStorage.setItem('site-lang', lang);
}

langToggle.addEventListener('click', () => {
  applyLanguage(lang === 'en' ? 'zh' : 'en');
});

year.textContent = new Date().getFullYear();
applyLanguage(lang);
