/* Visibilité descriptif roue*/
$(function() {
  $("html *").on('click', function(e) 
  /*$(document.getElementById('tab').getElementsByClassName('wtab-selected')).on('click', function(e)*/ {
    $('div[id="wtab1-pane-4"]').css("visibility", 'visible');
});
});

$(function() {
  /**
  * Smooth scrolling to page anchor on click
  **/
  $("a[href*='#']:not([href='#'])").click(function() {
      if (
          location.hostname == this.hostname
          && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
      ) {
          var anchor = $(this.hash);
          anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
          if ( anchor.length ) {
              $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
          }
      }
  });
});