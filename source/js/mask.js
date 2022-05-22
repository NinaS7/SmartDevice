import IMask from 'imask';

const inputPhones = document.querySelectorAll('input[type=tel]');

const im = new IMask('+7 (999)999-99-99');

for (let i = 0; i < inputPhones.length; i += 1) {
  const phone = inputPhones[i];

  im.mask(phone);
}
