const SELECTORS = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  'select:not([disabled]):not([aria-hidden])',
  'textarea:not([disabled]):not([aria-hidden])',
  'button:not([disabled]):not([aria-hidden])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex^="-"])'
];

const ESC_KEYCODE = 27;
const headerBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.modal__close');
const popup = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const firstInput = document.querySelector('.modal__input');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const focusableElsMain = main.querySelectorAll(SELECTORS);
const focusableElsHead = header.querySelectorAll(SELECTORS);
const focusableElsFoot = footer.querySelectorAll(SELECTORS);

const getscroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseFloat(scrollY || '0') * -1);
};

const onModal = () => {

  const onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  const focusMethod = function getFocus() {
    firstInput.focus();
  };

  const openPopup = function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal--closed');
    popup.classList.add('modal--active');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    overlay.style.display = 'block';
    focusMethod();
    popup.querySelector(SELECTORS).focus();

    focusableElsHead.forEach((el) => el.setAttribute('tabindex', '-1'));
    header.setAttribute('aria-hidden', 'true');
    focusableElsMain.forEach((el) => el.setAttribute('tabindex', '-1'));
    main.setAttribute('aria-hidden', 'true');
    focusableElsFoot.forEach((el) => el.setAttribute('tabindex', '-1'));
    footer.setAttribute('aria-hidden', 'true');

    document.addEventListener('keydown', onPopupEscPress);
    overlay.addEventListener('click', closePopup);
  };

  headerBtn.addEventListener('click', openPopup);

  const closePopup = function () {
    popup.classList.remove('modal--active');
    popup.classList.add('modal--closed');
    overlay.style.display = 'none';

    focusableElsHead.forEach((el) => el.removeAttribute('tabindex'));
    header.removeAttribute('aria-hidden');
    focusableElsMain.forEach((el) => el.removeAttribute('tabindex'));
    main.removeAttribute('aria-hidden');
    focusableElsFoot.forEach((el) => el.removeAttribute('tabindex'));
    footer.removeAttribute('aria-hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    getscroll();
    headerBtn.focus();
  };

  closeBtn.addEventListener('click', closePopup);
};

export {getscroll, onModal};
