const getMask = () => {
  document.getElementById('phone').addEventListener('input', function (e) {
    const x = e.target.value.replace(/\D/g, '').match(/\+(\d)(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = '+7(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
  });
};

export {getMask};
