$(window).bind('hashchange', function() {
  
  var link = $('a[href=' + window.location.hash + ']');
  link.addClass('active');
  link.parent().addClass('active');

});
