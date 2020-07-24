const sendForm = () => {


  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.';

  const forms = document.querySelectorAll('form'),
    thanks = document.getElementById('thanks');
    // answerContent = answerPopup.querySelector('.answer-content'),
    // loader = answerPopup.querySelector('.loader'),
    // popup = document.querySelector('.popup');
    // модальное окно с благодарностью
  const answerHandler = (form, message) => {
    thanks.addEventListener('click', e => {
      if (e.target.classList.contains('close_icon')) {
        thanks.style.display = 'none';
      } else {
        const target = e.target.closest('.form-content');
        if (!target) {
          thanks.style.display = 'none';
        }
      }
    });

    //   // скрываем попап, если он есть
    //   popup.style.opacity = 0;
    //   popup.style.visibility = 'hidden';
    //   // убираем прелоадер, появляется модалка с текстом
    //   loader.style.display = 'none';
    thanks.style.display = 'block';
    thanks.querySelector('p').innerHTML = message;
    //   // очищаем форму
    form.reset();
  };

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  // проверка телефона
  const checkPhone = item => {
    const patternPhone = /^\+?[78]\s?([-()]*\s?\d){10}$/;
    return patternPhone.test(item);
  };
  // проверка текстовых инпутов, можно вводить только русские буквы и пробелы
  const chechInput = () => {
    document.body.addEventListener('input', e => {
      const target = e.target;
      // в текстовые инпуты вводим только русские буквы
      if (target.name === 'name') {
        target.value = target.value.replace(/[^а-яё\s]+/i, '');
      }
      // проверка номера телефона
      if (target.type === 'tel') {
        if (!checkPhone(target.value)) {
          target.style.border = "2px solid red";
          return;
        }
        target.style.border = "";
      }
    });
  };
  chechInput();

  // const createError = (block, text) => {
  //   const errorMessage = document.createElement('div');
  //   errorMessage.textContent = text;
  //   errorMessage.classList.add('error');
  //   block.append(errorMessage);

  // };

  const formListener = form => {
    // const personalData = form.querySelector('.personal-data');

    // form.addEventListener('change', event => {
    //   const target = event.target;
    //   if (target.closest('.personal-data')) {
    //     if (target.checked) {
    //       personalData.querySelector('.error').style.display = 'none';
    //     } else {
    //       createError(personalData, 'Нужно ваше согласие');
    //       return;
    //     }
    //   }
    // });
    form.addEventListener('submit', event => {
      event.preventDefault();
      // if (!personalData.querySelector('input').checked) {
      //   createError(personalData, 'Нужно ваше согласие');
      //   return;
      // }

      // запускается прелоадер
      // answerPopup.classList.add('active');
      // loader.style.display = 'flex';
      // answerContent.style.display = 'none';
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
          console.log('send');
        })
        .catch(error => {
          answerHandler(form, errorMessage);
          console.log(error);
        });
    });
  };
    // отправка для трех форм
  forms.forEach(form => {
    formListener(form);
  });

};

export default sendForm;
