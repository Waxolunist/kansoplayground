$(window).bind('hashchange', function() {
  
  $('a[href=' + window.location.hash + ']').addClass('active');

});
