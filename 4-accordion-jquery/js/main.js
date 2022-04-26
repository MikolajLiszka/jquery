$(document).ready(function() {
    $('.accordion-title-one').click(function(){
        $('.accordion-content-one').slideToggle(2000);
    })

    $('.accordion-title-two').click(function(){
        $('.accordion-content-two').slideToggle(2000);
    })

    $('.accordion-title-three').click(function(){
        $('.accordion-content-three').slideToggle(1000);
    })
})
