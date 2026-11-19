// 1. ระบบสลับ Dark Mode / Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// 2. ระบบเปิด-ปิดเมนูบนหน้าจอเล็ก (Mobile / Split Screen)
const menuToggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ปิดเมนูอัตโนมัติเมื่อกดเลือกลิงก์
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});