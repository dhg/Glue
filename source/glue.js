$(function() {

  // Main vars----------------------------------------
  var includes = $('[data-glue-src]');
  var links = $('[data-glue-link]');
  var defaultYield = $('.glue-container');

  // URL Routing -------------------------------------
  if(getFragment()) {
    routeToTemplate(getFragment());
  }

  // Back button -------------------------------------
  window.onpopstate = function(event) {
    if(getFragment()) {
      routeToTemplate(getFragment());
    }
  };

  // Glue includes -----------------------------------
  includes.each(function() {
    renderTemplate($(this).attr('data-glue-src'), $(this));
  })

  // Handle links ------------------------------------
  $('[data-glue-link]').live("click", function(e) {
    e.preventDefault();
    routeToTemplate($(this).attr('data-glue-link'));
  });

  function getFragment() {
    if(location.hash.substr(1)) {
      return location.hash.substr(1);
    } else {
      return false;
    }
  }

  function routeToTemplate(templateName, templateContainer) {
    $('.rendered').removeClass('rendered');
    templateContainer = templateContainer || defaultYield;
    renderTemplate(templateName, templateContainer);
    location.hash = "#" + templateName;
  }

  function renderTemplate(templateName, templateContainer) {
    $.ajax({
      url: templateName + ".html",
      cache: false
    }).done(function(html) {
      templateContainer.html(html)
      var subincludes = templateContainer.find($('[data-glue-src]'));
      if (subincludes.length != 0) {
        subincludes.each(function() {
          renderTemplate($(this).attr('data-glue-src'), $(this));
        })
      } else {
        defaultYield.addClass('rendered');
      }
    });
  }
});