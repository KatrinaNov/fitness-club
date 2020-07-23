const takeGift = () => {
  const fixedGift = document.querySelector('.fixed-gift');
  const gift = document.getElementById('gift');

  if (fixedGift) {
    fixedGift.addEventListener('click', () => {
      gift.style.display = 'block';
      fixedGift.style.display = 'none';
    });
    gift.addEventListener('click', e => {
      const target = e.target;
      if (target.classList.contains('close_icon') ||
          !target.closest('.form-content') ||
          target.classList.contains('close-btn')) {
        gift.style.display = 'none';
      }
    });
  }
};

export default takeGift;
