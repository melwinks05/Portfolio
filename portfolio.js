const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});
