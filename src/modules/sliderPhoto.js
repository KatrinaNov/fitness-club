const sliderPhoto = () => {
  const slide = document.querySelectorAll('.gallery-slider .slide'),
    slider = document.querySelector('.gallery-slider');

  // добавляем блок с пагинацией на страницу
  const dotsList = document.createElement('ul');
  dotsList.classList.add('slider-dots');
  slider.append(dotsList);

  // добавляем стрелки
  slider.insertAdjacentHTML('beforeend', `
    <div class="slider-arrow prev">
      <span></span>
    </div>
    <div class="slider-arrow next">
      <span></span>
    </div>
  `);

  let currentSlide = 0, // номер слайда
    interval;
  // добавляем точек столько, сколько слайдов
  const addDots = () => {
    for (let i = 0; i < slide.length; i++) {
      const dot = document.createElement('li');
      dotsList.append(dot);
    }
  };
  addDots();
  const dot = document.querySelectorAll('.slider-dots li');

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  // автопрокрутка слайда
  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');
  };
  // запуск автопрокрутки
  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  // остановка автопрокрутки
  const stopSlide = () => {
    clearInterval(interval);
  };
  // переключение по клику на стрелки и точки
  slider.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    if (!target.matches('.slider-arrow, .slider-arrow span, .slider-dots, .slider-dots li')) {
      return;
    }
    prevSlide(slide, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'slick-active');
    if (target.closest('div.next')) {
      currentSlide++;
    } else if (target.closest('div.prev')) {
      currentSlide--;
    } else if (target.matches('.slider-dots li')) {
      dot.forEach((item, index) => {
        if (item === target) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'slick-active');

  });
  // остановка автопрокрутки при наведении на точки или стрелки
  slider.addEventListener('mouseover', event => {
    if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots')) {
      stopSlide();
    }
  });
  // запуск автопрокрутки при уведении мышки  с точкек или стрелок
  slider.addEventListener('mouseout', event => {
    if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots')) {
      startSlide();
    }
  });
  startSlide(2000);
};

export default sliderPhoto;