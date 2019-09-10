/* FBプラグイン表示 */
  jQuery(document).ready(function($) {
    $(window).on("resize", function (e) {
        fbWideScreenFade();
    });

    fbWideScreenFade();

    function fbWideScreenFade() {
      /* PCのみで透過現状変更 */
      if($(window).width() > 1200) {
        /* スクロールで透過現状変更　100%-69% */
        $(window).scroll( function(){
            $('.fb-plugin-inner').each( function(i) {
              if(!($(this).hasClass('fb-closed'))) {
                if (($(this).offset().top = $(window).scrollTop()) < 20) {
                  $(this).stop().fadeTo('fast', 1, 'linear');
                } else {              
                  $(this).stop().fadeTo(100, 0.69, 'linear');
                } 
              }             
            }); 
          });

        /* マウスオーバーで透過現状変更 */
        $('.fb-plugin-inner').hover(function() {
          $(this).stop().fadeTo('fast', 1, 'linear');
          }, function() {
            if (($(this).offset().top = $(window).scrollTop()) > 20) {
              $(this).stop().fadeTo(100, 0.69, 'linear');
            }
          }
        );
      }//window width > 1200px
    }//fbWideScreenFade

    $('#fb-display-btn').click(function() {
      /* 閉じるボタン 1段階目クリック：ヘッダーのみ表示*/
      if($(this).hasClass('minimize-btn')) {
        $(this).removeClass('minimize-btn').addClass('close-btn');
        $('.fb-page-outer').hide();
        $('.fb-plugin-link').addClass('minimized');

      }
      /* 閉じるボタン 2段階目クリック： 非表示*/
      else if($(this).hasClass('close-btn')) {
        $('.fb-plugin-inner').addClass('fb-closed');
        $('.fb-feed-container, .fb-plugin-header, .fb-plugin-inner').hide();
        $(this).hide();
      }
    });

    $('.fb-plugin-link').click(function( event ) {
        event.preventDefault();
        if ($(this).hasClass('minimized')) {
          $('.fb-page-outer').css('height', '302px');
          $('.fb-page-outer').show();
          $('.fb-plugin-inner').removeClass('fb-closed');
          $('#fb-display-btn').removeClass('close-btn').addClass('minimize-btn');
          $(this).removeClass('minimized');
        }
        else {
          window.open('https://ja-jp.facebook.com/gmosol');
          return false;
        }
    });
  });