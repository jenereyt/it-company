/* Header*/
document.addEventListener('DOMContentLoaded', () => {
  let burgerMenu = document.querySelector('.burger-menu');
  let navMenu = document.querySelector('.nav-menu');
  let loginBtns = document.querySelectorAll('.login-btn');
  let loginModal = document.getElementById('login-modal');
  let closeModalBtn = document.querySelector('.close-modal');

  function toggleMobileMenu() {
    navMenu.classList.toggle('mobile-active');
  }
  window.toggleMobileMenu = toggleMobileMenu;
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnBurger = burgerMenu.contains(e.target);
    if (!isClickInsideMenu && !isClickOnBurger) {
      navMenu.classList.remove('mobile-active');
    }
  });
  loginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal.style.display = 'block';
      navMenu.classList.remove('mobile-active');
    });
  });
  closeModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });
  let loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Вход выполняется...');
    loginModal.style.display = 'none';
  });
});



    // Создаем плавающие элементы
    const floatingElements = document.getElementById('floatingElements');
    
    for (let i = 0; i < 10; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      
      // Случайный размер
      const size = Math.random() * 30 + 10;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      
      // Случайная позиция
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      
      // Случайная задержка анимации
      element.style.animationDelay = `${Math.random() * 5}s`;
      
      floatingElements.appendChild(element);
    }

    // Добавляем эффект параллакса при движении мыши
    document.addEventListener('mousemove', (e) => {
      const elements = document.querySelectorAll('.floating-element');
      const circle = document.querySelector('.design-circle');
      
      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.01;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
      });

      const circleSpeed = 0.02;
      const circleX = (window.innerWidth - e.pageX * circleSpeed) / 100;
      const circleY = (window.innerHeight - e.pageY * circleSpeed) / 100;
      
      circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    });
