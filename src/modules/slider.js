const slider = () => {
  const slide = document.querySelectorAll('.main-slider .slide');
  let currentSlide = 0; // номер слайда

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  // автопрокрутка слайда
  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'active-flex');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'active-flex');
  };
  // запуск автопрокрутки
  const startSlide = (time = 3000) => {
    setInterval(autoPlaySlide, time);
  };
  startSlide(2000);
};

export default slider;