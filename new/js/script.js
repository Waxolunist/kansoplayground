$(window).bind('hashchange', function() {
  
  var link = $('a[href=' + window.location.hash + ']');
  link.addClass('active');
  link.parent().addClass('active');

});
$('nav > a').click(function(){
  
});
//TODO add onclick event to, not only on hashchange
