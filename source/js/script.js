const navButton = document.querySelector('.header__menu-button');
const navList = document.querySelector('.header__nav');

const toggle = () => {
  navButton.classList.toggle('header__menu-button--closed');
  navList.classList.toggle('header__nav--opened');
}

const close = () => {
  navButton.classList.add('header__menu-button--closed');
  navList.classList.remove('header__nav--opened');
}

document.addEventListener('click', function(evt) {
  const target = evt.target;

  target === navButton ? toggle() : target !== navList ? close() : false;
});