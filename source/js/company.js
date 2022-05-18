const companyInfo = document.querySelector('.company__info');
const companyButton = document.querySelector('.company__button');

const onClick = () => {
  companyInfo.classList.remove('company__info--nojs');

  companyButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    companyInfo.classList.toggle('company__info--closed');
    companyInfo.classList.toggle('company__info--opened');
  });
};

export {onClick};
