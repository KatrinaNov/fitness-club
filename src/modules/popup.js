const popup = () => {
  // открыть модальное окно
  const togglePopup = (btn, popup) => {
    const showPop = () => {
      btn.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    };
    // закрыть модальное окно
    const closePopup = () => {
      popup.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains('close_icon') || !target.closest('.form-content')) {
          popup.style.display = 'none';
        }
      });
    };
    showPop();
    closePopup();
  };
  
  const freeVisit = document.querySelector('.free-visit');
  const freeVisitForm = document.getElementById('free_visit_form');

  const callbackBtn = document.querySelector('.callback-btn');
  const callbackForm = document.getElementById('callback_form');

  togglePopup(freeVisit, freeVisitForm);
  togglePopup(callbackBtn, callbackForm);
};

export default popup;