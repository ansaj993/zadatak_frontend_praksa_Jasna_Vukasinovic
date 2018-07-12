jQuery(document).ready(function() {

$("a#myBtn").click(function(){
            $("html, body").animate({scrollTop: $("#naslov").offset().top }, 1000);
    });


});
