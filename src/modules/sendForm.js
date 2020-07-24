const sendForm = () => {


  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.';

  const forms = document.querySelectorAll('form'),
    thanks = document.getElementById('thanks'),
    loader = document.querySelector('.loader');
  // модальное окно с благодарностью
  const answerHandler = (form, message) => {
    // закрыть модальное окно с формой, если оно есть
    if (form.closest('.popup')) {
      form.closest('.popup').style.display = 'none';
    }
    thanks.addEventListener('click', e => {
      if (e.target.classList.contains('close_icon') || e.target.classList.contains('close-btn')) {
        thanks.style.display = 'none';
      } else {
        const target = e.target.closest('.form-content');
        if (!target) {
          thanks.style.display = 'none';
        }
      }
    });
    thanks.style.display = 'block';
    // убираем прелоадер, появляется модалка с текстом
    loader.style.display = 'none';
    thanks.querySelector('.form-wrapper').style.display = 'block';
    thanks.querySelector('p').innerHTML = message;
    // очищаем форму
    form.reset();
  };

  // создание предупреждающего сообщения об ошибке
  const createError = (block, text) => {
    const errorMessage = block.querySelector('.error');
    if (!errorMessage) {
      const errorMessage = document.createElement('div');
      errorMessage.textContent = text;
      errorMessage.classList.add('error');
      block.append(errorMessage);
    } else {
      errorMessage.style.display = 'block';
    }
  };
  // убрать ошибку
  const deleteError = block => {
    const errorMessage = block.querySelector('.error');
    if (errorMessage) {
      errorMessage.style.display = 'none';
    }
  };
  // проверка чекбокса
  const checkCheckbox = block => {
    if (!block.querySelector('input:checked')) {
      createError(block, 'Нужно ваше согласие');
      return false;
    } else {
      deleteError(block);
      return true;
    }
  };

  const validate = () => {
    document.body.addEventListener('input', e => {
      const target = e.target;
      // в текстовые инпуты вводим только русские буквы
      if (target.name === 'name') {
        target.value = target.value.replace(/[^а-яё\s]+/i, '');
      }

      // проверка телефона
      const checkPhone = item => {
        const patternPhone = /^\+?[78]\s?([-()]*\s?\d){10}$/;
        return patternPhone.test(item);
      };
      // проверка номера телефона
      if (target.type === 'tel') {
        if (!checkPhone(target.value)) {
          target.style.border = "2px solid red";
          return;
        }
        target.style.border = "";
      }
    });
    // проверка чекбоксов
    const personalData = document.querySelectorAll('.personal-data');
    personalData.forEach(item => {
      item.addEventListener('change', () => {
        checkCheckbox(item);
      });
    });
  };

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  validate();

  const formListener = form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      // проверка чекбоксов
      const personalData = form.querySelector('.personal-data');
      if (personalData) {
        if (!checkCheckbox(personalData)) return;
      }
      if (form.closest('.popup')) {
        form.closest('.popup').style.display = 'none';
      }
      // запускается прелоадер
      thanks.style.display = 'block';
      loader.style.display = 'flex';
      thanks.querySelector('.form-wrapper').style.display = 'none';

      // создаем объект с данными формы
      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          answerHandler(form, successMessage);
        })
        .catch(error => {
          answerHandler(form, errorMessage);
          console.log(error);
        });
    });
  };
  // отправка  форм
  forms.forEach(form => {
    formListener(form);
  });

};

export default sendForm;
