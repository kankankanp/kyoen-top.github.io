$(function(){
    $('.fa-bars').click(function(){
        var duration=350;
        var aside = $('.side-list')
        aside.toggleClass('open')
        if(aside.hasClass('open')){
          aside.stop(true).animate({left: '45%'}, duration);
        }else{
          aside.stop(true).animate({left: '150%'}, duration);
        };
      });
});

$(function(){
    //クリックで動く
    $('.nav-open').click(function(){
        $(this).toggleClass('active');
        $(this).next('nav').slideToggle();
    });
});
