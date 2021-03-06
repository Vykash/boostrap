jQuery(document).ready(function () {


    //NAVBAR TOGGLER
    
    $('.navbar-toggler').on('click', function () {
        $('.right-nav-box').toggleClass('margin-toggle');
    });
    $('.navbar-toggler').on('click', function () {
        $('.navbar-toggler').toggleClass('cross-icon-close-toggle');
    });
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    
    
    
    //MASONRY GALLERY
    
    //assegno indici agli elementi
    jQuery('.masonry-wrap .masonry-image').each(function () {
        var x = jQuery(this).index();
        var y = jQuery(this).parent().index();
        jQuery(this).attr('data-order', x).attr('data-col', y);
    });
    jQuery('.masonry-filters li a').on('click', function (e) {
        e.preventDefault();
        var colN = jQuery('.masonry-wrap .masonry-col').length;


        var target = jQuery(this).parent('li').attr('data-target');
        if (target != 'all') {
            jQuery('.masonry-wrap .masonry-col .masonry-image').hide();
            jQuery('.masonry-wrap .masonry-image[data-cat="' + target + '"]').each(function (i) {
                if (i >= colN) {
                    i = 0;
                }
                jQuery(this).appendTo(jQuery('.masonry-wrap .masonry-col').eq(i));
                jQuery(this).show();


            });
        } else {
            jQuery('.masonry-wrap .masonry-col .masonry-image').show();
            c = 0;
            h = 0;
            jQuery('.masonry-wrap .masonry-image').each(function () {
                var g = jQuery('.masonry-wrap .masonry-image[data-col="' + c + '"]').length - 1;

                jQuery('.masonry-wrap .masonry-image[data-col="' + c + '"][data-order="' + h + '"]').appendTo(jQuery('.masonry-wrap .masonry-col').eq(c));

                if (h == g) {
                    c++;
                    h = 0;
                } else {
                    h++;
                }

            });
        }
    });
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    //TABS
    
    jQuery('.menu-items li a').on('click', function (e) {
        e.preventDefault();
        // ottengo il data-target del link
        var attrLink = jQuery(this).attr('data-target')
        //rimuovo tutti gli elementi active
        jQuery('.who-we-are').removeClass('active');
        //aggiungo la classe active all' elemento con il 'data-target' uguale a quello del link
        jQuery('.who-we-are[data-target=' + attrLink + ']').addClass('active')

    });
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    
    //SLIDER 'on click' CON INDICE (PRIMA VERSIONE)
    
    /*jQuery('.brands-inner .brand-item').each(function () {
        var index = jQuery(this).index()
        jQuery(this).attr('data-order', index);
    });
    var x = jQuery('.brands-inner .brand-item').length
    var i = 0;
    var y = x;
    jQuery('.slider-button-right').on('click', function () {
        var currentImg = jQuery('.brand-item.slider-active');
        i++
        y = i
        if (i == x) {
            i = 0;
        }
        console.log(i + 'sono i')
        jQuery('.brand-item[data-order=' + i + ']').addClass('slider-active');
        currentImg.removeClass('slider-active');
    });
    jQuery('.slider-button-left').on('click', function () {
        var currentImg = jQuery('.brand-item.slider-active');
        y--
        i = y
        console.log(y + "sono y")
        if (y == -1) {
            y = x - 1;
        }
        jQuery('.brand-item[data-order=' + y + ']').addClass('slider-active');
        currentImg.removeClass('slider-active');
    });*/

    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////


    //SLIDER 'on click' CON INDICE (VERSIONE MIGLIORATA)

    var x = 0; //contatore unico per le immagini
    var y = jQuery('.brands-inner .brand-item').length;

    jQuery('.brands-inner .brand-item').each(function(){
            var index = jQuery(this).index();
            jQuery(this).attr('data-order', index);
        });
    
    function next_slide(){
        var currentImg = jQuery('.brand-item.slider-active');
        //proseguo verso destra incrementando 'x' ad ogni click
        //se 'x' dovesse essere uguale al numero di elementi - 1 ( ovvero all'ultima immagine dello slider )
        //sottraggo l' attuale valore di 'x' al valore di 'y'(Il numero di immagini)
            if(x == y -1){
                x = x - y;
            }
        x++;
        jQuery('.brand-item[data-order='+x+']').addClass('slider-active');
            currentImg.removeClass('slider-active'); 
    }
    function prev_slide(){
        var currentImg = jQuery('.brand-item.slider-active');
        //stesso procedimento ma decrementando il valore di 'x'(per tornare indietro)
            if (x == 0){
                x = y;
            };
        x--;
        jQuery('.brand-item[data-order='+x+']').addClass('slider-active');
            currentImg.removeClass('slider-active'); 
    }
    
    jQuery('.slider-button-right').on('click',function(){
        next_slide();
    });
    jQuery('.slider-button-left').on('click',function(){
        prev_slide();
    });

    ///////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    
    //SLIDER CON TIMER
    //FUNZIONE CUSTOM
    function autoSlider() {
        next_slide();
    };
    
    jQuery(window).on('keydown',function(e){
        evento = e.keyCode;
        
        if(evento == 39){
            next_slide();
        }else if(evento == 37){
            prev_slide();
        }
    })
    
    jQuery(window).on('blur',function(){
        clearInterval(slideTimer); 
    }).on('focus',function(){
        slideTimer = setInterval(autoSlider,2000);
    });
    
    
    //Richiamo la funzione
    var slideTimer = setInterval(autoSlider,2000);
    
    jQuery('.brands-inner').on('mouseover',function(){
        clearInterval(slideTimer);
    }).on('mouseout',function(){
        slideTimer = setInterval(autoSlider,2000);
    })
    
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    
    //SLIDER 'on click' CON '.next' '.prev'

    /*jQuery('.slider-button-right').on('click', function(){
        //assegno l'immagine con la classe active ad una variabile
    var currentImg = jQuery('.brand-item.slider-active');
        //controllo se l'ultima immagine è quella attiva, se attiva ricomincio dalla prima immagine
         if(jQuery('.brands-inner .brand-item').last().hasClass('slider-active')){
             jQuery('.brands-inner .brand-item').first().addClass('slider-active');
             jQuery(currentImg).removeClass('slider-active');
             //altrimenti proseguo verso l' elemento successivo
         }else{
             jQuery('.slider-active').next().addClass('slider-active');
             jQuery(currentImg).removeClass('slider-active');
         }
    });
    jQuery('.slider-button-left').on('click',function(){
    var currentImg = jQuery('.brand-item.slider-active');
        //questa volta controllo se l'immagine attiva è la prima, se lo è  parto dall' ultima
        if(jQuery('.brands-inner .brand-item').first().hasClass('slider-active')){
            jQuery('.brand-item').last().addClass('slider-active');
            jQuery(currentImg).removeClass('slider-active');
           }else{
               //altrimenti proseguo verso l'elemento precedente
               jQuery('.slider-active').prev().addClass('slider-active');
               jQuery(currentImg).removeClass('slider-active')
           }; 
    }); */

});
