



//   SCROLL
$(document).ready(function(){

    $('#top').click(function(){
        $('html, body').animate({
            scrollTop: $("#portada").offset().top
        }, 1500);
    });


    $('#primera').click(function(){
        $('html, body').animate({
            scrollTop: $("#primeraSeccion").offset().top
        }, 1500);
    });

    $('#grados').click(function(){
        $('html, body').animate({
            scrollTop: $("#360").offset().top
        }, 1500);
    });
});





// NAVBAR FIXED

posicionarMenu();

$(window).scroll(function() {
    posicionarMenu();
});

function posicionarMenu() {
    var altura_del_header = $('.body').outerHeight(true);
    var altura_del_menu = $('.navbar').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header){
        $('.navbar').addClass('fixed');
        $('#img-portada').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('.menu').removeClass('fixed');
        $('#img-portada').css('margin-top', '0');

    }
}


