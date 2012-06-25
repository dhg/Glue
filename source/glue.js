$(function() {

  // Main vars----------------------------------------
  var includes = $('[data-glue-src]');
  var links = $('[data-glue-link]');
  var fragment = getFragment();
  var defaultYield = $('.glue-container');

  // URL Routing -------------------------------------
  if(fragment) {
    routeToTemplate(fragment);
  }

  // Back button -------------------------------------
  window.onpopstate = function(event) {
    if(getFragment()) {
      routeToTemplate(fragment);
    } else {
      routeToTemplate('layout')
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
    var localFrag = location.hash.substr(1);
    if(location.hash.substr(1)) {
      fragment = localFrag;
      return fragment;
    } else {
      fragment = null;
      return false;
    }
  }

  function routeToTemplate(templateName, templateContainer) {
    templateContainer = templateContainer || defaultYield;
    renderTemplate(templateName, templateContainer);
    location.hash = "#" + templateName;
  }

  function renderTemplate(templateName, templateContainer) {
    $('.rendered').removeClass('rendered');
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
        templateContainer.addClass('rendered');
      }
    });
  }
});