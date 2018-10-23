$(function() {
  

  /*$(document).scroll(function () {
    var $nav = $('.navbar');
    var $navlink = $('.nav-link')
      $nav.toggleClass('dark-light',$(this).scrollTop() > $nav.height());
  });*/
   
    $('.navbar-toggler').on('click',function(){
        $('.right-nav-box').toggleClass('margin-toggle');
    })
    $('.navbar-toggler').on('click',function(){
        $('.navbar-toggler').toggleClass('cross-icon-close-toggle');
    })
    
});