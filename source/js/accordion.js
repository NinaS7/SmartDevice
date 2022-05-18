const accordionItem = document.querySelectorAll('.accordion-item');
const accordionHeader = document.querySelectorAll('.accordion-item__header');

const getAccordion = () => {
  accordionItem.forEach((item) => {
    item.classList.remove('accordion-item--nojs');
  });
  accordionHeader.forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      if (parent.classList.contains('accordion-item__current')) {
        parent.classList.remove('accordion-item__current');
      } else {
        accordionItem.forEach((child) => child.classList.remove('accordion-item__current'));
        parent.classList.add('accordion-item__current');
      }
    });
  });
};

export {getAccordion};
