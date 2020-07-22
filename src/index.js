import popup from './modules/popup';
import toggleClub from './modules/toggleClub';
import slider from './modules/slider';
import sliderPhoto from './modules/sliderPhoto';
import showBtnUp from './modules/showBtnUp';
import fixburgerMenu from './modules/fixburgerMenu';
import toggleBurgerMenu from './modules/toggleBurgerMenu';

// модальные окна
popup();

// выбрать клуб
toggleClub();

// слайдер на главной секции
slider();

// фотогалерея
sliderPhoto();

// кнопка вверх
showBtnUp();

// зафиксировали бургер меню при скролле
fixburgerMenu();

// открытие и закрытие бургер меню
toggleBurgerMenu();
