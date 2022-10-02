var carousel = $('.top-items');
var seats = $('.item');

var next = function(el) {
  if (el.next().length > 0) {
    return el.next();
  } else {
    return seats.first();
  }
};

var progress = function(e) {
  var el = $('.is-ref').removeClass('is-ref');
  var new_seat = next(el);

  new_seat.addClass('is-ref').css('order', 1);
  for (var i = 2, ref = seats.length; i <= ref; i++) {
    new_seat = next(new_seat).css('order', i);
    console.log(new_seat);
  }

  carousel.removeClass('is-set');

  return setTimeout((function() {
    return carousel.addClass('is-set');
  }), 50);
};

window.setInterval(function(){
  progress();
}, 2000);