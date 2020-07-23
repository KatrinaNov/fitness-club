const calculate = () => {
  const cardOrder = document.getElementById('card_order');
  let currentMonth = "1";
  let currentClub = 'mozaika';
  const price = {
    'mozaika': {
      '1': 1999,
      '6': 9900,
      '9': 13900,
      '12': 19900
    },
    'schelkovo': {
      '1': 2999,
      '6': 14990,
      '9': 21990,
      '12': 24990
    }
  };

  if (cardOrder) {
    const priceTotal = document.getElementById('price-total');

    const findCheckedElem = name => {
      const elems = cardOrder.querySelectorAll(`[name=${name}]`);
      let currentElem;
      elems.forEach(item => {
        if (item.checked) {
          currentElem = item.value;
        }
      });
      return currentElem;
    };

    priceTotal.textContent = price[currentClub][currentMonth];

    cardOrder.addEventListener('change', () => {
      currentClub = findCheckedElem('club-name');
      currentMonth = findCheckedElem('card-type');
      if (cardOrder.querySelector('.promo').value === 'ТЕЛО2020') {
        priceTotal.textContent = Math.floor(price[currentClub][currentMonth] * 0.3);
      } else {
        priceTotal.textContent = price[currentClub][currentMonth];
      }
    });

    // промокод






  }
};

export default calculate;
