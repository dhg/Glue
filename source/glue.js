$(function() {

  // Main vars----------------------------------------
  var includes = $('[glue-src]');
  var links = $('[glue-link]');
  var fragment = getFragment();
  var defaultYield = $('.glue-container');

  // URL Routing -------------------------------------
  if(fragment) {
    routeToTemplate(fragment);
  }

  // Back button -------------------------------------
  window.onpopstate = function(event) {
    routeToTemplate(getFragment());
  };

  // Glue includes -----------------------------------
  includes.each(function() {
    renderTemplate($(this).attr('glue-src'), $(this));
  })

  // Handle links ------------------------------------
  $('[glue-link]').live("click", function(e) {
    e.preventDefault();
    routeToTemplate($(this).attr('glue-link'));
  });

  function getFragment() {
    return location.hash.substr(1);
  }

  function routeToTemplate(templateName, templateContainer) {
    $('.rendered').removeClass('rendered');
    templateContainer = templateContainer || defaultYield;
    renderTemplate(templateName, templateContainer);
    location.hash = "#" + templateName;
  }

  function renderTemplate(templateName, templateContainer) {
    $.ajax({
      url: templateName + ".mustache",
      cache: false
    }).done(function(html) {
      console.log(html)
      html = Mustache.render(html, view);
      templateContainer.html(html)
      var subincludes = templateContainer.find($('[glue-src]'));
      if(subincludes.length != 0) {
        subincludes.each(function() {
          renderTemplate($(this).attr('glue-src'), $(this));
        })
      } else {
        defaultYield.addClass('rendered');
      }
    });
  }
});