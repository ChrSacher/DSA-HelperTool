var PubSubMixin = {
    pubSubEvents : {},
    emit = function(name, data) {
      var handlers = pubSubEvents[name];
      if(!!handlers === false) return;
      handlers.forEach(function(handler) {
        handler.call(this, data);
      });
    },
  
    on = function(name, handler) {
      var handlers = pubSubEvents[name];
      if(!!handlers === false) {
        handlers = pubSubEvents[name] = [];
      }
      handlers.push(handler);
    },
  
    off = function(name, handler) {
      var handlers = pubSubEvents[name];
      if(!!handlers === false) return;
  
      var handlerIdx = handlers.indexOf(handler);
      handlers.splice(handlerIdx);
    },
  };