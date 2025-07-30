const translations = {
  th: {
    menu_home: "เข้าสู่ระบบ",
    menu_calculator: "คำนวณ",
    menu_history: "ประวัติ",
    login: "เข้าสู่ระบบ",
    register: "สมัครสมาชิก",
    amount: "จำนวนเงิน",
    submit: "บันทึก",
    // เพิ่มคำอื่นได้ที่นี่
  },
  en: {
    menu_home: "Login",
    menu_calculator: "Calculator",
    menu_history: "History",
    login: "Login",
    register: "Register",
    amount: "Amount",
    submit: "Submit",
    // Add more translations here
  }
};

function changeLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'th';
  document.getElementById('language-selector').value = savedLang;
  changeLanguage(savedLang);
});