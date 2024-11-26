document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');

  // Переключение мобильного меню
  burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-active');
  });

  // Закрытие меню при клике вне его
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnBurger = burgerMenu.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
      navMenu.classList.remove('mobile-active');
    }
  });
});



 // Модальное окно
 const contactBtn = document.getElementById('contactBtn');
 const contactModal = document.getElementById('contactModal');
 const closeBtn = document.querySelector('.close-btn');

 contactBtn.addEventListener('click', (e) => {
     e.preventDefault();
     contactModal.style.display = 'flex';
 });

 closeBtn.addEventListener('click', () => {
     contactModal.style.display = 'none';
 });

 // Закрытие модального окна при клике вне его
 window.addEventListener('click', (e) => {
     if (e.target === contactModal) {
         contactModal.style.display = 'none';
     }
 });

 // Обработка формы
 const contactForm = document.querySelector('.contact-form');
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
     contactModal.style.display = 'none';
 });




 document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          }
      });
  }, observerOptions);

  timelineItems.forEach(item => {
      observer.observe(item);
  });
});
