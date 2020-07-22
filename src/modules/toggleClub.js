const toggleClub = () => {
  const clubsList = document.querySelector('.clubs-list');

  clubsList.addEventListener('click', () => {
    clubsList.querySelector('ul').classList.toggle('active');
  });
};
export default toggleClub;