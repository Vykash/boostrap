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
    //assegno indici agli elementi
    jQuery('.masonry-wrap .masonry-image').each(function(){
        var x = jQuery(this).index();
        var y = jQuery(this).parent().index();
        jQuery(this).attr('data-order',x).attr('data-col',y);
    });
    
    jQuery('.masonry-filters li a').on('click', function(e){
        e.preventDefault();
        var colN = jQuery('.masonry-wrap .masonry-col').length;

        
        var target = jQuery(this).parent('li').attr('data-target');
        if(target != 'all'){
            jQuery('.masonry-wrap .masonry-col .masonry-image').hide();
            jQuery('.masonry-wrap .masonry-image[data-cat="'+target+'"]').each(function(i){
                if(i >= colN){
                    i = 0;
                }
                jQuery(this).appendTo(jQuery('.masonry-wrap .masonry-col').eq(i));
                jQuery(this).show();

                
            });
        }else{
            jQuery('.masonry-wrap .masonry-col .masonry-image').show();
            c = 0;
            h = 0;
            jQuery('.masonry-wrap .masonry-image').each(function(){
                var g = jQuery('.masonry-wrap .masonry-image[data-col="'+c+'"]').length-1;
                
                jQuery('.masonry-wrap .masonry-image[data-col="'+c+'"][data-order="'+h+'"]').appendTo(jQuery('.masonry-wrap .masonry-col').eq(c));
                
                if(h == g){
                    c++;
                    h = 0;
                }else{
                    h++;
                }
            
            });
        }
    });
    
    
});