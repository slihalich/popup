let d = document,
close = d.getElementById('close'),
overlay = d.getElementById('overlay'),
open = d.getElementById('open'),
popup = d.getElementById('popup');

overlay.addEventListener('click', function(e) {
  console.log(e);
  if (e.target === close || e.target === overlay) {
    popup.classList.add('popupfade');
    overlay.classList.add('overlayfade');
    setTimeout(function() {
      overlay.classList.add('none');
      popup.classList.remove('popupfade');
      overlay.classList.remove('overlayfade');
    }, 160);
  }
});

open.addEventListener('click', function() {
  overlay.classList.remove('none');
});