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




// Получаем элементы
const consultationBtn = document.getElementById('consultationBtn');
const modal = document.getElementById('consultationModal');
const closeModalBtn = document.getElementById('closeModal');
const form = document.getElementById('consultationForm');

// Маска для телефона
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  let formattedValue = '';

  if (value.length > 0) {
    formattedValue += '+7';

    if (value.length > 1) {
      formattedValue += '(' + value.substring(1, 4);
    }

    if (value.length >= 4) {
      formattedValue += ') ' + value.substring(4, 7);
    }

    if (value.length >= 7) {
      formattedValue += '-' + value.substring(7, 9);
    }

    if (value.length >= 9) {
      formattedValue += '-' + value.substring(9, 11);
    }
  }

  e.target.value = formattedValue;
});

// Открытие модального окна
consultationBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Закрытие модального окна
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие модального окна при клике вне формы
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Обработка отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Простая валидация
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');

  let isValid = true;

  // Валидация имени
  if (name.value.trim() === '') {
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameError.style.display = 'none';
  }

  // Валидация телефона (простая)
  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  if (!phoneRegex.test(phone.value)) {
    phoneError.style.display = 'block';
    isValid = false;
  } else {
    phoneError.style.display = 'none';
  }

  // Если все проверки пройдены
  if (isValid) {
    // Здесь должна быть логика отправки формы
    alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
    modal.style.display = 'none';
    form.reset();
  }
})


function showDetails(card) {
  card.style.transform = 'scale(1.05)';
  setTimeout(() => {
    card.style.transform = 'scale(1)';
  }, 200);
  alert(card.querySelector('.service-title').textContent + '\n\n' +
    card.querySelector('.service-description').textContent);
}



const codeLines = document.querySelectorAll('.code-line');
codeLines.forEach(line => {
  line.addEventListener('mouseenter', () => {
    line.style.transform = 'translateX(20px)';
    line.style.opacity = '1';
    line.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
  });

  line.addEventListener('mouseleave', () => {
    line.style.transform = 'translateX(0)';
    line.style.opacity = '0.7';
    line.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
  });
});
