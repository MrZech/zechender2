!function(e){"use strict";e(window).on("load",function(){e(".loader-inner").fadeOut(),e(".loader").delay(200).fadeOut("slow")}),e("a.scroll").smoothScroll({speed:800,offset:-57});var i=e(".header"),s=i.offset();function a(){e(".main-slider .slides li").css("height",e(window).height())}e(window).scroll(function(){e(this).scrollTop()>s.top+500&&i.hasClass("default")?i.fadeOut("fast",function(){e(this).removeClass("default").addClass("switched-header").fadeIn(200)}):e(this).scrollTop()<=s.top+500&&i.hasClass("switched-header")&&i.fadeOut("fast",function(){e(this).removeClass("switched-header").addClass("default").fadeIn(100)})}),e(function(){a()}),e(window).resize(function(){a()}),e(".main-slider").flexslider({animation:"fade",slideshow:!0,directionNav:!0,controlNav:!1,pauseOnAction:!1,animationSpeed:500}),e(".review-slider").flexslider({animation:"slide",slideshow:!0,directionNav:!1,controlNav:!0,pauseOnAction:!1,animationSpeed:500});var l=e(".mobile-but"),o=e(".main-nav ul");o.height();e(l).on("click",function(){return e(".toggle-mobile-but").toggleClass("active"),o.slideToggle(),e(".main-nav li a").addClass("mobile"),!1}),e(window).resize(function(){e(window).width()>320&&o.is(":hidden")&&(o.removeAttr("style"),e(".main-nav li a").removeClass("mobile"))}),e(".main-nav li a").on("click",function(){e(this).hasClass("mobile")&&(o.slideToggle(),e(".toggle-mobile-but").toggleClass("active"))}),e(".background-img").each(function(){var i=e(this).children("img").attr("src");e(this).css("background-image",'url("'+i+'")').css("background-position","initial")}),e(".block-filter li a").on("click",function(){e(this).addClass("active"),e(this).parent().siblings().find("a").removeClass("active");var i=e(this).attr("data-filter");if(e(this).closest(".gallery").find(".block-gallery").removeClass("disable"),"all"!==i)for(var s=e(this).closest(".gallery").find(".block-gallery"),a=0;a<s.length;a++)s.eq(a).hasClass(i)||s.eq(a).addClass("disable");return!1}),new Instafeed({get:"user",userId:"8325695316",accessToken:"8325695316.f2b58fa.c666ac03ac2242518d86ce58bcfc285c",limit:30,resolution:"standard_resolution",template:'<li><a href="{{link}}" target="_blank"><img src="{{image}}"/></a></li>',after:function(){e("#block-stream").gridrotator({rows:2,columns:9,interval:3e3,preventClick:!1,w1024:{rows:2,columns:4},w768:{rows:2,columns:4},w480:{rows:2,columns:2},w320:{rows:2,columns:4},w240:{rows:2,columns:4}})}}).run()}(jQuery); 