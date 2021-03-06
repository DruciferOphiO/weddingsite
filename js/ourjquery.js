jQuery(document).ready(function ($) {
     (function() {
     
     var documentEl = $(document),
         textCenter = $('#text-center'),
         secondPage = $('#container2'),
         thirdPage = $('#container3'),
         fourthPage = $('#container4'),
         partyPage = $('#container9'),
         registryPage = $('#container11'),
         galleryPage = $('#container14'),
         rsvpPage = $('#container15'),
         weddingTitle = $('#theWedding'),
         navbackground = $(".white-shadow");
    var textCenterTop = $('#text-center-mobile-top');
    textCenterTop.fadeOut(0);

         
     documentEl.on('scroll', function() {
         var height = $(window).scrollTop();
    
         if (height < secondPage.offset().top)
         {
             navbackground.css("opacity", 0.8);
         }
        else {
            
         navbackground.css("opacity", 1);
        }

        if ($( window ).width() < 768) {
            textCenter = $('#text-center-mobile')
        //    textCenter.text(height+"  "+secondPage.offset().top);
            var titleHeight = $(window).scrollTop() +160;
            var delayHeight = $(window).scrollTop()+300;
            thirdPage = $('#container3mobile');
            registryPage = $('#container10mobile')
            var fadeoutTime = 700;
             if (height < 100)
             {
                 textCenter.text("May 6, 2016");
                 textCenter.fadeIn(fadeoutTime);
                 textCenterTop.fadeOut(fadeoutTime);
             }
             else if (height+110 > secondPage.offset().top && height < secondPage.offset().top) {

                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+320 > thirdPage.offset().top && height+130 < thirdPage.offset().top) {

                textCenterTop.text("The Wedding");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+320 > partyPage.offset().top && height+130 < partyPage.offset().top) {

                textCenterTop.text("The Party");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+320 > registryPage.offset().top && height+130 < registryPage.offset().top) {

                textCenterTop.text("The Registry");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+320 > galleryPage.offset().top && height+130 < galleryPage.offset().top) {

                textCenterTop.text("Our Gallery");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+320 > rsvpPage.offset().top && height+130 < rsvpPage.offset().top) {

                textCenterTop.text("RSVP");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else
             {
                textCenter.fadeOut(fadeoutTime);
                textCenterTop.fadeOut(fadeoutTime);
             }
        }
        else if ($( window ).width() > 768 && $( window ).width() < 992) {
            textCenter = $('#text-center-mobile')
        //    textCenter.text(height+"  "+secondPage.offset().top);
            var titleHeight = $(window).scrollTop() +160;
            var delayHeight = $(window).scrollTop()+300;
            thirdPage = $('#container3mobile');
            registryPage = $('#container10mobile')
            var fadeoutTime = 700;
             if (height < 200)
             {
                 textCenter.text("May 6, 2016");
                 textCenter.fadeIn(fadeoutTime);
                 textCenterTop.fadeOut(fadeoutTime);
             }
             else if (height+200 > secondPage.offset().top && height < secondPage.offset().top) {

                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+420 > thirdPage.offset().top && height+230 < thirdPage.offset().top) {

                textCenterTop.text("The Wedding");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+420 > partyPage.offset().top && height+230 < partyPage.offset().top) {

                textCenterTop.text("The Party");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+420 > registryPage.offset().top && height+230 < registryPage.offset().top) {

                textCenterTop.text("The Registry");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+420 > galleryPage.offset().top && height+230 < galleryPage.offset().top) {

                textCenterTop.text("Our Gallery");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else if (height+420 > rsvpPage.offset().top && height+230 < rsvpPage.offset().top) {

                textCenterTop.text("RSVP");
                textCenterTop.fadeIn(fadeoutTime);
             }
             else
             {
                textCenter.fadeOut(fadeoutTime);
                textCenterTop.fadeOut(fadeoutTime);
             }  
        }
        else {
            var titleHeight = $(window).scrollTop() +160;
            var delayHeight = $(window).scrollTop()+300;
            var fadeoutTime = 700;
             if (titleHeight < secondPage.offset().top)
             {
                 textCenter.text("May 6, 2016");
                 textCenter.fadeIn(fadeoutTime);
             }
             else if (titleHeight >= secondPage.offset().top && delayHeight < thirdPage.offset().top)
             {
                 textCenter.text("Love Story");
                 textCenter.fadeIn(fadeoutTime);
                 
             }
             else if (height+140 < thirdPage.offset().top && height+400 >= thirdPage.offset().top)
             {
                textCenter.text("The Wedding");
                textCenter.fadeIn(fadeoutTime);
             }
        
             else if (height+150 < partyPage.offset().top && height+400 >= partyPage.offset().top)
             {
                textCenter.text("The Party");
                textCenter.fadeIn(fadeoutTime);
             }
        
             else if (height+500 > registryPage.offset().top && height+350 < registryPage.offset().top)
             {
                textCenter.text("The Registry");
                textCenter.fadeIn(fadeoutTime);
             }
             else if (height >= galleryPage.offset().top-320 && height < galleryPage.offset().top-130)
             {
                textCenter.text("Our Gallery");
                textCenter.fadeIn(fadeoutTime);
             }
             else if (height >= rsvpPage.offset().top-320 && height < rsvpPage.offset().top-130)
             {
                textCenter.text("RSVP");
                textCenter.fadeIn(fadeoutTime);
             }
             else
             {
                textCenter.fadeOut(fadeoutTime);
             }  
        }
        
         
     });
     
     if ($( window ).width() >991){
        
             $( "#leftHalf" ).hover(
                function()
                {
                    $("#drewText").css("opacity", 1);
                    $("#drewImage").css("opacity", 0.05);
                    $("#gelText").css("opacity", 0);
                    $("#gelImage").css("opacity", 1);
                },
                function()
                {
                    $("#drewText").css("opacity", 0);
                    $("#drewImage").css("opacity", 1);
                    $("#gelText").css("opacity", 0);
                    $("#gelImage").css("opacity", 1);
                }
             );
             
             $("p").on("taphold",function(){
                $(this).hide();
            });
             
             $( "#rightHalf" ).hover(
                function()
                {
                    $("#gelText").css("opacity", 1);
                    $("#gelImage").css("opacity", 0.05);
                    $("#drewText").css("opacity", 0);
                    $("#drewImage").css("opacity", 1);
                },
                function()
                {
                    $("#gelText").css("opacity", 0);
                    $("#gelImage").css("opacity", 1);
                    $("#drewText").css("opacity", 0);
                    $("#drewImage").css("opacity", 1);
                }
             );
     }

     
      
    $("#monogram").click(function (e) {
       htmlbody.animate({
            scrollTop: $("#slide1").offset().top
        }, 2000, 'easeInOutQuint');
    });
    
     $("#monogram-2").click(function (e) {
       htmlbody.animate({
            scrollTop: $("#slide1mobile").offset().top
        }, 2000, 'easeInOutQuint');
    });
     if ($( window ).width() < 991) {
        $('#partyPicText1').bind('touchstart', function(e){
            $('#partyPic1').css("opacity", 0.05);
            $('#partyText1').css("opacity", 1);
        });
        $('#partyPicText1').bind('touchend', function(e){
            $('#partyPic1').css("opacity", 1);
            $('#partyText1').css("opacity", 0);
        });
        
        $('#partyPicText2').bind('touchstart', function(e){
            $('#partyPic2').css("opacity", 0.05);
            $('#partyText2').css("opacity", 1);
        });
        $('#partyPicText2').bind('touchend', function(e){
            $('#partyPic2').css("opacity", 1);
            $('#partyText2').css("opacity", 0);
        });
        
        $('#partyPicText3').bind('touchstart', function(e){
            $('#partyPic3').css("opacity", 0.05);
            $('#partyText3').css("opacity", 1);
        });
        $('#partyPicText3').bind('touchend', function(e){
            $('#partyPic3').css("opacity", 1);
            $('#partyText3').css("opacity", 0);
        });
        
        $('#partyPicText4').bind('touchstart', function(e){
            $('#partyPic4').css("opacity", 0.05);
            $('#partyText4').css("opacity", 1);
        });
        $('#partyPicText4').bind('touchend', function(e){
            $('#partyPic4').css("opacity", 1);
            $('#partyText4').css("opacity", 0);
        });
        
        $('#partyPicText5').bind('touchstart', function(e){
            $('#partyPic5').css("opacity", 0.05);
            $('#partyText5').css("opacity", 1);
        });
        $('#partyPicText5').bind('touchend', function(e){
            $('#partyPic5').css("opacity", 1);
            $('#partyText5').css("opacity", 0);
        });
        
        $('#partyPicText6').bind('touchstart', function(e){
            $('#partyPic6').css("opacity", 0.05);
            $('#partyText6').css("opacity", 1);
        });
        $('#partyPicText6').bind('touchend', function(e){
            $('#partyPic6').css("opacity", 1);
            $('#partyText6').css("opacity", 0);
        });
        
        $('#partyPicText7').bind('touchstart', function(e){
            $('#partyPic7').css("opacity", 0.05);
            $('#partyText7').css("opacity", 1);
        });
        $('#partyPicText7').bind('touchend', function(e){
            $('#partyPic7').css("opacity", 1);
            $('#partyText7').css("opacity", 0);
        });
        
        $('#partyPicText8').bind('touchstart', function(e){
            $('#partyPic8').css("opacity", 0.05);
            $('#partyText8').css("opacity", 1);
        });
        $('#partyPicText8').bind('touchend', function(e){
            $('#partyPic8').css("opacity", 1);
            $('#partyText8').css("opacity", 0);
        });
        
        $('#partyPicText9').bind('touchstart', function(e){
            $('#partyPic9').css("opacity", 0.05);
            $('#partyText9').css("opacity", 1);
        });
        $('#partyPicText9').bind('touchend', function(e){
            $('#partyPic9').css("opacity", 1);
            $('#partyText9').css("opacity", 0);
        });
        
        $('#partyPicText10').bind('touchstart', function(e){
            $('#partyPic10').css("opacity", 0.05);
            $('#partyText10').css("opacity", 1);
        });
        $('#partyPicText10').bind('touchend', function(e){
            $('#partyPic10').css("opacity", 1);
            $('#partyText10').css("opacity", 0);
        });
     } else {
        $('#partyPicText1').hover(
            function()
            {
                $('#partyPic1').css("opacity", 0.05);
                $('#partyText1').css("opacity", 1);
            },
            function()
            {
                $('#partyPic1').css("opacity", 1);
                $('#partyText1').css("opacity", 0);
            }
         );
         
         $('#partyPicText2').hover(
            function()
            {
                $('#partyPic2').css("opacity", 0.05);
                $('#partyText2').css("opacity", 1);
            },
            function()
            {
                $('#partyPic2').css("opacity", 1);
                $('#partyText2').css("opacity",0);
            }
         );
         
         $('#partyPicText3').hover(
            function()
            {
                $('#partyPic3').css("opacity", 0.05);
                $('#partyText3').css("opacity", 1);
            },
            function()
            {
                $('#partyPic3').css("opacity", 1);
                $('#partyText3').css("opacity", 0);
            }
         );
         
         $('#partyPicText4').hover(
            function()
            {
                $('#partyPic4').css("opacity", 0.05);
                $('#partyText4').css("opacity", 1);
            },
            function()
            {
                $('#partyPic4').css("opacity", 1);
                $('#partyText4').css("opacity", 0);
            }
         );
         
         $('#partyPicText5').hover(
            function()
            {
                $('#partyPic5').css("opacity", 0.05);
                $('#partyText5').css("opacity", 1);
            },
            function()
            {
                $('#partyPic5').css("opacity", 1);
                $('#partyText5').css("opacity", 0);
            }
         );
         
         $('#partyPicText6').hover(
            function()
            {
                $('#partyPic6').css("opacity", 0.05);
                $('#partyText6').css("opacity", 1);
            },
            function()
            {
                $('#partyPic6').css("opacity", 1);
                $('#partyText6').css("opacity", 0);
            }
         );
         
         $('#partyPicText7').hover(
            function()
            {
                $('#partyPic7').css("opacity", 0.05);
                $('#partyText7').css("opacity", 1);
            },
            function()
            {
                $('#partyPic7').css("opacity", 1);
                $('#partyText7').css("opacity", 0);
            }
         );
         
         $('#partyPicText8').hover(
            function()
            {
                $('#partyPic8').css("opacity", 0.05);
                $('#partyText8').css("opacity", 1);
            },
            function()
            {
                $('#partyPic8').css("opacity", 1);
                $('#partyText8').css("opacity", 0);
            }
         );
         
         $('#partyPicText9').hover(
            function()
            {
                $('#partyPic9').css("opacity", 0.05);
                $('#partyText9').css("opacity", 1);
            },
            function()
            {
                $('#partyPic9').css("opacity", 1);
                $('#partyText9').css("opacity", 0);
            }
         );
         
         $('#partyPicText10').hover(
            function()
            {
                $('#partyPic10').css("opacity", 0.05);
                $('#partyText10').css("opacity", 1);
            },
            function()
            {
                $('#partyPic10').css("opacity", 1);
                $('#partyText10').css("opacity", 0);
            }
         );
     }
     
     
    $("#myCarousel").click(function(){
        textCenter.fadeOut(700);
    });

 })();
});