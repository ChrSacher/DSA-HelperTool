var ObservableMixin = {
    observableMixinSubscribers : [],
    notify = function(data) {
        observableMixinSubscribers.forEach(function(handler) {
        handler.call(this, data);
      });
    },
  
    addObserver = function(handler) {
      observableMixinSubscribers.push(handler);
    },
  
    removeObserver = function(handler) {
      var handlerIdx = handlers.indexOf(handler);
      observableMixinSubscribers.splice(handlerIdx);
    },
  };