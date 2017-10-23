function mainNav(event) {
  console.log('clicked ', event.target.value);
}
$(document).ready(function() {

  $.get('./home.html', function(response) {
   aboutEl = response;
   $('#content').html(aboutEl);
  });

  var navFunction = function(event) {
    var fileName = './' + event.currentTarget.id + '.html';
    $.get( fileName, function( data ) {
      $( "#content" ).html( data );
      if (event.target.id === 'home') {
        $('.category-block__link-wrapper').click(navFunction);
      }
    });
  };

  $('.main-nav__item a').click(navFunction);

});

/*
*
* */
