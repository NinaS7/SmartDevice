import iMask from 'imask';

const getMask = () => {
  const MIN_LENGTH = 16;
  const inputTel = document.getElementById('field-tel');
  const inputTelModal = document.getElementById('field-tel-modal');

  iMask(inputTel, {mask: '+{7}(000)000-00-00'});
  iMask(inputTelModal, {mask: '+{7}(000)000-00-00'});


  inputTel.addEventListener('input', () => {
    inputTel.setCustomValidity('');
    if (inputTel.value.length < MIN_LENGTH) {
      inputTel.setCustomValidity('Номер телефона введён не полностью');
    } inputTel.reportValidity();
  });

  inputTelModal.addEventListener('input', () => {
    inputTelModal.setCustomValidity('');
    if (inputTelModal.value.length < MIN_LENGTH) {
      inputTelModal.setCustomValidity('Номер телефона введён не полностью');
    } inputTelModal.reportValidity();
  });
};

export {getMask};
