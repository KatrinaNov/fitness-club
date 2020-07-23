const popup = () => {
  // открыть модальное окно
  const makeAppointment = (btn, popup) => {
    btn.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  };
  // закрыть модальное окно
  const closePopup = popup => {
    popup.addEventListener('click', e => {
      const target = e.target;
      if (target.classList.contains('close_icon') || !target.closest('.form-content')) {
        popup.style.display = 'none';
      }
    });
  };
  const freeVisit = document.querySelector('.free-visit');
  const freeVisitForm = document.getElementById('free_visit_form');

  const callbackBtn = document.querySelector('.callback-btn');
  const callbackForm = document.getElementById('callback_form');

  makeAppointment(freeVisit, freeVisitForm);
  closePopup(freeVisitForm);

  makeAppointment(callbackBtn, callbackForm);
  closePopup(callbackForm);
};

export default popup;