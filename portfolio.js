const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});
