function togglePassword() {
  const pass = document.getElementById("password");
  const confirm = document.getElementById("confirmPassword");
  pass.type = pass.type === "password" ? "text" : "password";
  confirm.type = confirm.type === "password" ? "text" : "password";
}

async function register() {
  const username = document.getElementById("username").value.trim();
  const emailOrPhone = document.getElementById("emailOrPhone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !emailOrPhone || !password || !confirmPassword) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    return;
  }

  if (password !== confirmPassword) {
    alert("รหัสผ่านไม่ตรงกัน");
    return;
  }

  const data = {
    type: "register",
    username,
    emailOrPhone,
    password,
  };

  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  const text = await res.text();
  if (text === "duplicate") {
    alert("ชื่อผู้ใช้หรืออีเมล/เบอร์โทรนี้มีอยู่แล้ว");
  } else if (text === "success") {
    alert("ลงทะเบียนสำเร็จ");
    localStorage.setItem("username", username);
    window.location.href = "calculator.html";
  } else {
    alert("เกิดข้อผิดพลาด");
  }
}

async function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    alert("กรุณากรอกข้อมูลให้ครบ");
    return;
  }

  const data = {
    type: "login",
    username,
    password,
  };

  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  const text = await res.text();
  if (text === "success") {
    alert("เข้าสู่ระบบสำเร็จ");
    localStorage.setItem("username", username);
    window.location.href = "calculator.html";
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
}