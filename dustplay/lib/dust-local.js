function loadTemplates(templates, callback) {

  var templateCount = templates.length;

  $.each(templates, function(i, t) {    
    $.get(t.path, function(data) {
      var tpl = dust.compile(data, t.name);
      dust.loadSource(tpl);
      applyCallback(--templateCount, callback);
    });    
  });

}

function applyCallback(templatecount, callback) {
  if(templatecount == 0) {
    callback.apply();
  }
}
