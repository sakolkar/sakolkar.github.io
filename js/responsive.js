$(document).ready(function() {
  $('.scroll-link').on('click', function(event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  })

  $('scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });

  setSectionHeights();
});

function scrollToID(id, speed) {
  var target = $(id).offset().top;
  $('html, body').animate({scrollTop:target}, speed);
}

function setSectionHeights() {
  var windowH = $(window).height();

  $('.page-section').each(function (i) {
    if ($(this).height() < windowH) {
      // $(this).css({height: windowH});
    }
  });
}
