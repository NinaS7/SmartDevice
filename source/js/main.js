import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
import {getAccordion} from './accordion';
import {onClick} from './company';
import './mask';
import {getMask} from './mask';
import './popup';
import {getscroll, onModal} from './popup';

const anchors = document.querySelectorAll('.scroll-to');


window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  // initModals();
});

window.addEventListener('load', () => {

  onModal();
  getMask();

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();
      getscroll();
      const blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  onClick();
  getAccordion();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
