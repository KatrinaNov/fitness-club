const sendForm = () => {


  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Спасибо за заявку! Мы скоро с вами свяжемся!';

  const form1 = document.getElementById('form1'),
    form2 = document.getElementById('form2'),
    form3 = document.getElementById('card_order'),
    form4 = document.getElementById('footer_form'),
    form5 = document.getElementById('banner-form'),
    answerPopup = document.getElementById('thanks');
    // answerContent = answerPopup.querySelector('.answer-content'),
    // loader = answerPopup.querySelector('.loader'),
    // popup = document.querySelector('.popup');
    // модальное окно с благодарностью
  const answerHandler = (form, message) => {
    answerPopup.addEventListener('click', e => {
      if (e.target.classList.contains('close_icon')) {
        answerPopup.style.display = 'none';
      } else {
        const target = e.target.closest('.form-content');
        if (!target) {
          answerPopup.style.display = 'none';
        }
      }
    });

    //   // скрываем попап, если он есть
    //   popup.style.opacity = 0;
    //   popup.style.visibility = 'hidden';
    //   // убираем прелоадер, появляется модалка с текстом
    //   loader.style.display = 'none';
    answerPopup.style.display = 'block';
    answerPopup.querySelector('p').textContent = message;
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

  // проверка текстовых инпутов, можно вводить только русские буквы и пробелы
  const chechInput = () => {
    document.body.addEventListener('input', e => {
      const target = e.target;
      if (target.classList.contains('form-name') ||
            target.classList.contains('mess')) {
        target.value = target.value.replace(/[^а-яё\s]+/i, '');
      }
    });
  };
  chechInput();
  // проверка телефона
  const checkPhone = item => {
    const patternPhone = /^\+?[78]\s?([-()]*\s?\d){10}$/;
    return patternPhone.test(item);
  };

  const formListener = form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const phone = event.target.querySelector('[type=tel]');
      if (!checkPhone(phone.value)) {
        phone.style.border = "1px solid red";
        return;
      }
      phone.style.border = "";
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
  formListener(form1);
  formListener(form2);
  formListener(form3);
  formListener(form4);
  formListener(form5);


};

export default sendForm;
