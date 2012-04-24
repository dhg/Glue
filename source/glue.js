$(function() {

  // Main vars----------------------------------------
  var includes = $('[data-glue-src]');
  var defaultYield = $('.glue-container');
  var fragment = getFragment();

  // URL Routing -------------------------------------
  routeToFragment();

  // Back button -------------------------------------
  window.onpopstate = function(event) {
    routeToFragment();
  };

  // Glue includes -----------------------------------
  includes.each(function() {
    renderTemplate($(this).attr('data-glue-src'), $(this));
  })

  // Handle links ------------------------------------
  $(document).on("click", "[data-glue-link]", function(e) {
    e.preventDefault(e);
    routeToTemplate($(e.target).attr('data-glue-link'));
  });

  function getFragment() {
    return location.hash.substr(1);
  }

  function routeToFragment() {
    if(getFragment()) {
      routeToTemplate(getFragment());
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