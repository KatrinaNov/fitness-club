const toggleBurgerMenu = () => {
  const menuButton = document.querySelector('.menu-button img');
  const popupMenu = document.querySelector('.popup-menu');

  menuButton.addEventListener('click', () => {
    popupMenu.style.display = 'flex';
  });

  popupMenu.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.scroll a') || target.matches('.close-menu-btn img')) {
      popupMenu.style.display = 'none';
    }
  });
};

export default toggleBurgerMenu;