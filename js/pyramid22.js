$(document).ready(function () {


//beginning menu clicks
    $('a[href^="."]').click(function(){
    $('.wrapper__menu').removeClass('active');
    var scroll_el = $(this).attr('href');
    $('.menu__list > li').removeClass('active');
    $(this).parent('li').addClass('active');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 600);
    return false; 
    });
//end menu clicks

//beginning menu clicks
    $('a[href^="#"]').click(function(){
    $('.wrapper__menu').removeClass('active');
    var scroll_el = $(this).attr('href');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top - 50}, 600);
    return false; 
    });


//beginning load
$(window).load(function() {

    setTimeout(function(){
        $('.menu').addClass('active'); 
        $('.bg').addClass('active'); 
    },200);

    if($('body').width() >= 1025){
        $('body').addClass('fix'); 
        setTimeout(function(){
        $('body').removeClass('fix'); 
        },6000);
    }
    
});//end .load
          
$('.for-iframe').click(function (){
    var myVideoCode = $(this).attr('data-email-id');
    $(".big__content").html('<iframe src="'+myVideoCode+'" align="center""></iframe>');
    $('iframe').load(function() {
        $('html, body').delay(300).animate({scrollTop: $('.screen2').offset().top}, 300, function() {
// $('.big__content').addClass('noscroll');
        });
//        if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
//            $(".big__content").addClass('ios');
//        }
//        else{
//            $(".big__content").removeClass('ios');
//        }


        console.log('я загрузился');
        $('body').addClass('active');


        $('.big').addClass('active');
        $('.menu').addClass('special');
        
    });//end .load
    
    
});          

$('.menu__indoor__burger').click(function (){
    $('body').removeClass('active');
//$('.big__content').removeClass('noscroll');
    $('.big').removeClass('active');
    $('.menu').removeClass('special');
    $('html, body').animate({scrollTop: $('.screen2').offset().top}, 300, function() {
    });
}); 


$('.wrapper__menu__indoor').click(function() {
    $(this).closest('.wrapper__menu').toggleClass('active');
});



// var newBlock = 0;
// $(window).scroll(function() {
//     $('.screen').each(function () {
//         var blockWithAnimate = $(this);
//         var windowScrollTop = $(window).scrollTop();
//         if(windowScrollTop >= blockWithAnimate.offset().top && windowScrollTop <= blockWithAnimate.offset().top + blockWithAnimate.height()){
//             var myChoose = $(this).index();
//             console.log(myChoose+" = "+newBlock);
//             if (newBlock != myChoose) {
//                 newBlock = myChoose;
//                 $('.menu__list > li').removeClass('active');
//                 $('.menu__list > li').eq(myChoose).addClass('active');
            
//             }
//         }
//     });
// });


// var $video  = $('video'),
//     $window = $(window); 

// $(window).resize(function(){
//     var height = $window.height();
//     $video.css('height', height);

//     var videoWidth = $video.width(),
//         windowWidth = $window.width(),
//     marginLeftAdjust =   (windowWidth - videoWidth) / 2;

//     $video.css({
//         'height': height, 
//         'marginLeft' : marginLeftAdjust
//     });
// }).resize();








});//end .ready