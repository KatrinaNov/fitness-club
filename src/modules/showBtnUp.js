const showBtnUp = () => {
  const btnTop = document.getElementById('totop');

  window.addEventListener('scroll', () => {
    btnTop.style.display = pageYOffset > document.querySelector('.header-main').offsetHeight ? 'block' : '';
  });
};

export default showBtnUp;
