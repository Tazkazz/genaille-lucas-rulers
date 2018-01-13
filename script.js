const card = (name, extraClass = '') =>
  $('<img>')
    .addClass(`card ${extraClass}`)
    .attr('src', `cards/${name}.png`);

const clean = () => $('#cards').html(card('index'));

$(document).ready(() => {
  clean();
  $('#number').keyup(() => {
    clean();
    const number = $('#number').val().trim().replace(/\D/g,'');
    $('#number').val(number);
    const digits = number.split('');
    digits.forEach(digit => $('#cards').append(card(digit, 'digit')));
  });
});
