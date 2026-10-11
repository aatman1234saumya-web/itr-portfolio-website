/* 1. Theme toggle: change a CSS class and remember the browser preference. */
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
function setTheme(theme) {
  const dark = theme === 'dark';
  body.classList.toggle('dark', dark);
  themeToggle.textContent = dark ? '☀' : '◐';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  // Some browser settings restrict storage for local files; the theme still works.
  try { localStorage.setItem('portfolio-theme', theme); } catch (error) { /* Use this session's theme. */ }
}
let initialTheme = 'light';
try { initialTheme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'; } catch (error) { /* Use light mode. */ }
setTheme(initialTheme);
themeToggle.addEventListener('click', () => setTheme(body.classList.contains('dark') ? 'light' : 'dark'));

/* 2. Mobile menu: keep the accessibility state consistent with the display. */
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
function setMenu(open) {
  navMenu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}
menuBtn.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navMenu.classList.contains('open')) {
    setMenu(false);
    menuBtn.focus();
  }
});
window.addEventListener('resize', () => { if (window.innerWidth > 760) setMenu(false); });

/* 3. Dynamic content updates: filter cards and total their training hours. */
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.course-card');
const visibleCourses = document.getElementById('visibleCourses');
const visibleHours = document.getElementById('visibleHours');
const courseSummary = document.getElementById('courseSummary');
function filterCourses(category) {
  let count = 0;
  let hours = 0;
  cards.forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.hidden = !show;
    if (show) { count += 1; hours += Number(card.dataset.hours); }
  });
  filters.forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  visibleCourses.textContent = count;
  visibleHours.textContent = hours;
  courseSummary.textContent = `Showing ${count} ${count === 1 ? 'course' : 'courses'} · ${hours} hours`;
}
filters.forEach(button => button.addEventListener('click', () => filterCourses(button.dataset.filter)));
filterCourses('all');

/* 4. Client-side form validation and a live message character counter. */
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const fieldIds = ['name', 'email', 'message'];
const messageField = document.getElementById('message');
const charCount = document.getElementById('charCount');
function getError(id) {
  const field = document.getElementById(id);
  const value = field.value.trim();
  if (id === 'name' && value.length < 2) return 'Please enter a name with at least 2 characters.';
  if (id === 'email' && (!value || !field.validity.valid || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) return 'Please enter a valid email address, such as you@example.com.';
  if (id === 'message' && value.length < 10) return 'Please write a message of at least 10 characters.';
  return '';
}
function validateField(id) {
  const error = getError(id);
  document.getElementById(id + 'Error').textContent = error;
  document.getElementById(id).setAttribute('aria-invalid', String(Boolean(error)));
  return !error;
}
fieldIds.forEach(id => document.getElementById(id).addEventListener('input', () => {
  if (document.getElementById(id).getAttribute('aria-invalid') === 'true') validateField(id);
  formStatus.textContent = '';
  formStatus.className = 'form-status';
}));
messageField.addEventListener('input', () => { charCount.textContent = messageField.value.length + ' / 2000'; });
form.addEventListener('submit', event => {
  event.preventDefault();
  let firstInvalid = null;
  fieldIds.forEach(id => { if (!validateField(id) && firstInvalid === null) firstInvalid = id; });
  if (firstInvalid !== null) {
    formStatus.className = 'form-status error';
    formStatus.textContent = 'Please check the highlighted fields.';
    document.getElementById(firstInvalid).focus();
    return;
  }
  const name = document.getElementById('name').value.trim();
  // textContent displays user input as text, never as executable HTML.
  formStatus.className = 'form-status success';
  formStatus.textContent = `Thanks, ${name}! Your message passes validation. This is a demo; no message was sent.`;
  form.reset();
  fieldIds.forEach(id => document.getElementById(id).removeAttribute('aria-invalid'));
  charCount.textContent = '0 / 2000';
});

/* 5. Update the footer year automatically. */
document.getElementById('year').textContent = new Date().getFullYear();
