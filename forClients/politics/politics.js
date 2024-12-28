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


// // MAIN
// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = '1';
//         entry.target.style.transform = 'translateY(0)';
//       }
//     });
//   }, {
//     threshold: 0.1
//   });

//   document.querySelectorAll('.privacy-section').forEach(section => {
//     observer.observe(section);
//   });
// });
