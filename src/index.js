import popup from './modules/popup';
import toggleClub from './modules/toggleClub';
import slider from './modules/slider';
import sliderPhoto from './modules/sliderPhoto';
import showBtnUp from './modules/showBtnUp';
import fixburgerMenu from './modules/fixburgerMenu';
import toggleBurgerMenu from './modules/toggleBurgerMenu';
import SliderCarousel from './modules/SliderCarousel';
import takeGift from './modules/takeGift';
import calculate from './modules/calculate';

// модальные окна
popup();

// подарок
takeGift();

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

// слайдер карусель с услугами
const options = {
  main: '.services-slider-wrapper',
  wrap: '.services-slider',
  prev: '.services-slider__prev',
  next: '.services-slider__next',
  slidesToShow: 5,
  responsive: [{
    breakpoint: 1200,
    slidesToShow: 4,
  },
  {
    breakpoint: 1024,
    slidesToShow: 3,
  },
  {
    breakpoint: 768,
    slidesToShow: 2,
  },
  {
    breakpoint: 576,
    slidesToShow: 1,
  }
  ]
};
const carousel = new SliderCarousel(options);
carousel.init();

// калькулятор
calculate();
