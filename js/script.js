$(function(){
  
    $('.back_top_btn').click(function(){
        $('html, body').animate({'scrollTop':0},500);
    });
    


    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        
        $('html,body').animate({ 
          'scrollTop':position-50
        }, 500);

        $('header a').removeClass('nav_active');
        $(this).addClass('nav_active');

        
      });

      $('.policy').click(function() {
        $('.policy_content_wrap').fadeIn();
      });
      $('.top_close_btn').click(function() {
        $('.policy_content_wrap').fadeOut();
      });
      $('.close_btn').click(function() {
        $('.policy_content_wrap').fadeOut();
      });
     


  });