(function($, ko) {

  // Shorthand
  
  ko.obs = ko.observable;
  ko.obsa = ko.observableArray;
  ko.dobs = ko.dependentObservable;
  
  // Custom binding
  
  ko.bindingHandlers.fadeVisible = {
    init: function (element, valueAccessor) {
      $(element).toggle(ko.utils.unwrapObservable(valueAccessor()));
    },
    update: function (element, valueAccessor) {
      ko.utils.unwrapObservable(valueAccessor()) ? $(element).fadeIn() : $(element).fadeOut();
    }
  };
  
  // Main
  
  $(document).ready(function() {
    bindVM();
    createClouds();
    animateClouds();
  });
  
  // Helper functions
  
  function ViewModel() {
    this.stillBinding = false;
    this.topics = ko.obsa([
      { value: '', verb: 'do:', noun: '...' },
      { value: 'js', verb: 'love', noun: 'JavaScript.' },
      { value: 'apps', verb: 'build', noun: 'web apps.' },
      { value: 'html5', verb: 'embrace', noun: 'HTML 5.' },
      { value: 'mobile', verb: 'create', noun: 'the mobile web.' },
      { value: 'ux', verb: 'obsess over', noun: 'user experience.' },
      { value: 'design', verb: 'exhibit', noun: 'beautiful design.' },
      { value: 'realtime', verb: 'develop', noun: 'realtime interactions.' }
    ]);
    this.activeTopic = ko.obs(this.topics()[0]);
    this.activeVerb = ko.dobs(function() {
      return this.activeTopic().verb;
    }, this);
  }
  
  function bindVM() {
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
  }
  
  function createClouds() {
    var cloudCountainer = $('#clouds'),
        cloudCount = 3,
        clouds, i;
    for (i = 0; i < cloudCount; i++) {
      var newCloud = $('canvas').addClass('cloud');
      newCloud.attr('width', 300);
      newCloud.attr('height', 150);
      cloudContainer.
    }
    clouds.each(function() {
      $(this).offset({ left: 0, top: 0});
    });
  }
  
  function animateClouds() {
    var clouds = $('.cloud'),
        i;
    (function update() {
      clouds.each(function() {
        var off = $(this).offset();
        $(this).offset({ left: off.left + 1, top: off.top });
      })
      window.setTimeout(update, 30);
    })();
  }
  
})($, ko);