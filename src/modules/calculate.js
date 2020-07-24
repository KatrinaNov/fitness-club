const calculate = () => {
  const cardOrder = document.getElementById('card_order');
  const priceTotal = document.getElementById('price-total');
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

  if (cardOrder && priceTotal) {

    const findCheckedElem = name => cardOrder.querySelector(`input[name=${name}]:checked`).value;

    priceTotal.textContent = price[currentClub][currentMonth];

    cardOrder.addEventListener('input', () => {
      currentClub = findCheckedElem('club-name');
      currentMonth = findCheckedElem('card-type');
      if (cardOrder.querySelector('.promo').value === 'ТЕЛО2020') {
        priceTotal.textContent = Math.floor(price[currentClub][currentMonth] * 0.7);
      } else {
        priceTotal.textContent = price[currentClub][currentMonth];
      }
    });
  }
};

export default calculate;
