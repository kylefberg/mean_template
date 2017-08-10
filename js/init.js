(function($){
  $(function(){
    $('.slider').slider({full_width: true});
    $('.carousel').carousel();
    $('.carousel').carousel('next');
    $('.carousel').carousel('next', [3]);
    $('.carousel').carousel('prev');
    $('.carousel').carousel('prev', [4]);
    $('.button-collapse').sideNav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space


