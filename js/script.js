const modalBtn = $('.header__btn');
const modalClose = $('.close__btn');
const overlay = $('.overlay');
const modal = $('.modal');
const body = $('body');

modalBtn.click(function() {
  overlay.show(500);
  modal.css({opacity: '1'});
  body.addClass('noscroll');
});

modalClose.click(function() {
  overlay.hide(500);
  modal.css({ opacity: '0' });
  body.removeClass('noscroll');
});

overlay.click(function() {
  overlay.hide(500);
  modal.css({ opacity: '0' });
  body.removeClass('noscroll');
});
