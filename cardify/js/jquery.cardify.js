(function ($) {
  $.fn.appendCard = function(options){
    var settings = $.extend({
      id: null,
      title: "",
      className: "medium",
      faIcon: null,
      body: "",
      showClose: false,
      callback: null,
      attrs: [],
      closeFunction: function(){}
    }, options)

    var container = $("<div />").addClass(settings.className).addClass("cardify-card")
    if(settings.showClose){
      $(container)
      .append("<div class='cardify-remove'><i class='icon-remove'></i></div>")
      .on("click", settings.closeFunction) 
    }
    
    if (settings.id != null){
      $(container).attr('id', settings.id);
    }
    container.append($("<h4 />").html(settings.title))
    

    if(settings.faIcon != null){
      $($(container).find("h4"))
      .prepend("<i class='" + settings.faIcon + "'></i>&nbsp;&nbsp;")
    }

    container.append($("<div />").html(settings.body))
    
    if(settings.attrs.length > 0){
      for(var idx = 0; idx < settings.attrs.length; idx++){
        for(var key in settings.attrs[idx]){
          $(container).attr(key, settings.attrs[idx][key])
        }
      }
    }

    $(this).append(container)

    if($.isFunction(settings.callback)){
      settings.callback.call(this)
    }
    
    return container;
  }
}(window.jQuery))