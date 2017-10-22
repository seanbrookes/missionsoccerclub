function mainNav(event) {
  console.log('clicked ', event.target.value);
}
$(document).ready(function() {

  $.get('./home.html', function(response) {
   aboutEl = response;
   $('#content').html(aboutEl);
  });


  $('.main-nav__item button').click(function(event) {
    console.log(event.target.value);

    var fileName = './' + event.target.value + '.html';
    $.get( fileName, function( data ) {
      $( "#content" ).html( data );
    });

  });

});
