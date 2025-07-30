const API_URL = 'https://script.google.com/macros/s/AKfycbydKumtEImW3tOj8H67kePm2vEnpIV2jxcSwtQEiz3Hm-5GvhOL741zvZ7GId1pTk-H/exec';

function login() {
  const userId = document.getElementById('userId').value;
  const password = document.getElementById('password').value;

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ type: 'login', userId, password }),
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', data.username);
      window.location.href = 'calculator.html';
    } else {
      document.getElementById('loginMessage').innerText = 'เข้าสู่ระบบไม่สำเร็จ';
    }
  });
}

function changeLanguage() {
  const lang = document.getElementById('languageSelect').value;

  if (lang === 'en') {
    document.getElementById('loginTitle').innerText = 'Login';
    document.getElementById('loginButton').innerText = 'Login';
    document.getElementById('userId').placeholder = 'User ID';
    document.getElementById('password').placeholder = 'Password';
    document.getElementById('registerText').innerHTML = `Don't have an account? <a href="register.html" id="registerLink">Register</a>`;
    document.getElementById('menuCalc').innerText = 'Calculator';
    document.getElementById('menuHistory').innerText = 'History';
  } else {
    document.getElementById('loginTitle').innerText = 'เข้าสู่ระบบ';
    document.getElementById('loginButton').innerText = 'เข้าสู่ระบบ';
    document.getElementById('userId').placeholder = 'User ID';
    document.getElementById('password').placeholder = 'รหัสผ่าน';
    document.getElementById('registerText').innerHTML = `ยังไม่มีบัญชี? <a href="register.html" id="registerLink">สมัครสมาชิก</a>`;
    document.getElementById('menuCalc').innerText = 'คำนวณ';
    document.getElementById('menuHistory').innerText = 'ประวัติ';
  }
}

// 🌗 เพิ่มระบบเปลี่ยนธีมได้ในอนาคต เช่น:
// document.body.classList.add('dark-theme')