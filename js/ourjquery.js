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
    
    if (screen.width < 600)
    {
        registryPage = $('#container10mobile')
    }

         
     documentEl.on('scroll', function() {
         var height = $(window).scrollTop();
    
         if (height < secondPage.offset().top)
         {
             textCenter.text("May 6, 2016");
             navbackground.css("opacity", 0.8);
         }
        else {
            
         navbackground.css("opacity", 1);
        }

        if ($( window ).width() < 599) {
            var titleHeight = $(window).scrollTop() +160;
            var delayHeight = $(window).scrollTop()+300;
            var fadeoutTime = 700;
            textCenter.text("at "+height+" vs = "+$('#slide1').height());
             if (height < $('#slide1').height())
             {
                
                // textCenter.text("May 6, 2016");
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
             else if (height >= galleryPage.offset().top-200 && height < galleryPage.offset().top-5)
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
             else if (height >= galleryPage.offset().top-200 && height < galleryPage.offset().top-5)
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
     
      
    $("#monogram").click(function (e) {
       htmlbody.animate({
            scrollTop: $("#slide1").offset().top
        }, 2000, 'easeInOutQuint');
    });
     
     $('#partyPicText1').hover(
        function()
        {
            $('#partyPic1').css("opacity", 0.1);
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
            $('#partyPic2').css("opacity", 0.1);
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
            $('#partyPic3').css("opacity", 0.1);
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
            $('#partyPic4').css("opacity", 0.1);
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
            $('#partyPic5').css("opacity", 0.1);
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
            $('#partyPic6').css("opacity", 0.1);
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
            $('#partyPic7').css("opacity", 0.1);
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
            $('#partyPic8').css("opacity", 0.1);
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
            $('#partyPic9').css("opacity", 0.1);
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
            $('#partyPic10').css("opacity", 0.1);
            $('#partyText10').css("opacity", 1);
        },
        function()
        {
            $('#partyPic10').css("opacity", 1);
            $('#partyText10').css("opacity", 0);
        }
     );
     
    $("#myCarousel").click(function(){
        textCenter.fadeOut(700);
    });

 })();
});