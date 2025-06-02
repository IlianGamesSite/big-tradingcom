 const toggleBtn = document.getElementById('dropdown-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');

  // Показать/скрыть меню при клике на кнопку
  toggleBtn.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Обработчик для кнопок выбора языка
  dropdownMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('lang-btn')) {
      const lang = e.target.getAttribute('data-lang');

      if (lang === 'Қазақша') {
        window.location.href = 'indexkaz.html';
      } else if (lang === 'English') {
        window.location.href = 'indexang.html';
      } else if (lang === 'Русский') {
        window.location.href = 'index.html'; // например
      }
    }
  });

  // Чтобы меню скрывалось при клике вне его
  document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && e.target !== toggleBtn) {
      dropdownMenu.style.display = 'none';
    }
  });