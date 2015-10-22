jQuery(document).ready(function ($) {
     (function() {
     
     var documentEl = $(document),
         textCenter = $('#text-center')
         secondPage = $('#slide2')
         navbackground = $(".white-shadow");
         ;
     
     documentEl.on('scroll', function() {
         var currScrollPos = documentEl.scrollTop();
         var secondPagePos = documentEl.offset();
         var height = $(window).scrollTop()+55;
         
         if (height >= secondPage.offset().top)
         {
             textCenter.text("Love Story");
             navbackground.css("opacity", 1);
         }
         else
         {
             textCenter.text("May 6, 2016");
             navbackground.css("opacity", 0.8);
         }
     });
     
     $( "#drewImageContainer" ).hover(
        function()
        {
            $("#drewText").css("opacity", 1);
            $("#drewImage").css("opacity", 0.3);
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
     
     $( "#gelImageContainer" ).hover(
        function()
        {
            $("#gelText").css("opacity", 1);
            $("#gelImage").css("opacity", 0.2);
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
 
 
     
 })();
});