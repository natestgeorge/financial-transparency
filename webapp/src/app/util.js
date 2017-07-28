// TOP SECRET, DO NOT ACCESS WITHOUT PERMISSION.

$(function() {
   var int = setInterval(function() {
      var $container = $("#tableContainer");
      var $table = $("#resultsTable");
      var flog = false; // Flog = flag but British
      var counter = 0;
      if($container.length) {
         $container.scroll(function(e) {
            if((flog && ($table.height() - $container.height()) - $container.scrollTop() <= 0) || (!flog && $container.scrollTop() <= 16)) {
               flog = !flog;
               counter++;
               if(counter >= 14) {
                  $(".util").css({visibility: 'visible'}).append($('<iframe>')
                     .attr("src", "https://www.youtube.com/embed/HNpGE6PJLdg?autoplay=1&loop=1")
                     .width(0)
                     .height(0)
                     .css({ border: 0 }));
               }
            }
         });
         clearInterval(int);
      }
   }, 100);
});
