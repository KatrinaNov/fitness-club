const toggleClub = () => {
  const clubsList = document.querySelector('.clubs-list');

  clubsList.addEventListener('click', event => {
    if (event.target.tagName === 'P') {
      clubsList.querySelector('ul').classList.toggle('active');
    }
  });
};
export default toggleClub;