const fixburgerMenu = () => {
  const topMenu = document.querySelector('.top-menu');
  let width = window.innerWidth;
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    topMenu.style.position = '';
  });
  window.addEventListener('scroll', () => {
    // если ширина меньше 768 и если хоть немного открутили (когда докручиваем до самого верха, меню становится на свое место)
    topMenu.style.position = (width < 768 && pageYOffset > topMenu.offsetHeight) ? 'fixed' : '';
  });


};

export default fixburgerMenu;
