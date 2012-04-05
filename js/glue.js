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
    renderTemplate($(this).attr('glue-src'), $(this), $(this).attr('glue-data'));
  })

  // Handle links ------------------------------------
  $('[glue-link]').live("click", function(e) {
    e.preventDefault();
    routeToTemplate($(this).attr('glue-link'));
  });

  function getFragment() {
    return location.hash.substr(1);
  }

  function routeToTemplate(templateName, templateContainer, templateData) {
    $('.rendered').removeClass('rendered');
    templateContainer = templateContainer || defaultYield;
    renderTemplate(templateName, templateContainer, templateData);
    location.hash = "#" + templateName;
  }

  function renderTemplate(templateName, templateContainer, templateData) {
    $.ajax({
      url: templateName + ".html",
      cache: false
    }).done(function(html) {
      templateContainer
        .empty()
        .append(html);
      injectData(templateContainer, templateData)
      var subincludes = templateContainer.find($('[glue-src]'));
      if(subincludes.length != 0) {
        subincludes.each(function() {
          renderTemplate($(this).attr('glue-src'), $(this), $(this).attr('glue-data'));
        })
      } else {
        defaultYield.addClass('rendered');
      }
    });
  }

  function injectData(templateContainer, templateData) {
    $.ajax({
      url: templateData + ".json",
      cache: false
    }).done(function(json) {
      console.log(json)
      templateContainer.find('[glue-value]').each(function() {
        var jsonKey = $(this).attr('glue-value').toString();
        if(json[jsonKey]) {
          $(this).html(json[jsonKey])
        }
      });
    })
  }

});
