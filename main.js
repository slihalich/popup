let d = document,
close = d.getElementById('close'),
overlay = d.getElementById('overlay'),
open = d.getElementById('open'),
popup = d.getElementById('popup');

close.addEventListener('click', function() {
  popup.classList.add('fade');
  setTimeout(function() {
    overlay.classList.add('none');
    popup.classList.remove('fade');
  }, 150);
});

open.addEventListener('click', function() {
  overlay.classList.remove('none');

});