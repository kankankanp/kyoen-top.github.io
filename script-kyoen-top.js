$(function() {
  
    function toggleChangeBtn() {
      var slideIndex = $('.slide').index($('.active'));
      $('.change-btn').show();
      if (slideIndex == 0) {
        $('.prev-btn').hide();
      } else if (slideIndex == $('.slide').length-1) {
        $('.next-btn').hide();
      }
    }
    
    $('.index-btn').click(function() {
      $('.active').removeClass('active');
      var clickedIndex = $('.index-btn').index($(this));
      $('.slide').eq(clickedIndex).addClass('active');
      toggleChangeBtn();
    });
    
    $('.change-btn').click(function() {
      var $displaySlide = $('.active');
      $displaySlide.removeClass('active');
      if ($(this).hasClass('next-btn')) {
        $displaySlide.next().addClass('active');
      } else {
        $displaySlide.prev().addClass('active');
      }
      toggleChangeBtn();
    });


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