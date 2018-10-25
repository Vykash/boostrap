jQuery(document).ready(function() {


  /*$(document).scroll(function () {
    var $nav = $('.navbar');
    var $navlink = $('.nav-link')
      $nav.toggleClass('dark-light',$(this).scrollTop() > $nav.height());
  });*/
   
    $('.navbar-toggler').on('click',function(){
        $('.right-nav-box').toggleClass('margin-toggle');
    });
    $('.navbar-toggler').on('click',function(){
        $('.navbar-toggler').toggleClass('cross-icon-close-toggle');
    });
    
    jQuery('.masonry .masonry-image').each(function(){
        var x = jQuery(this).index();
        var y = jQuery(this).parent().index();
        jQuery(this).attr('data-order',x).attr('data-col',y);
    });
    
    var colN = jQuery('.masonry .masonry-col').lenght;
    jQuery('.masonry-filters li a').on('click', function(e){
        e.preventDefault();
        
        var target = jQuery(this).parent('li').attr('data-target');
        if(target != 'all'){
            jQuery('.masonry .masonry-col .masonry-image').hide();
            jQuery('.masonry .masonry-image[data-cat="'+target+'"]').each(function(i){
                   jQuery(this).appendTo(jQuery('.masonry .masonry-col').eq(i));
                   jQuery(this).show();
                i++;
            });
        }else{
            jQuery('.masonry .masonry-col .masonry-image').show();
            jQuery('.masonry .masonry-image').each(function(c){
                
                
                var i = jQuery(this).attr('data-order');
                var i2 = jQuery(this).next().attr('data-order');
                jQuery('.masonry .masonry-col[data-col="'+c+'"]');
                
                
                if(i2 == 0){
                    c++;
                }
            });
        }
    });
    
});