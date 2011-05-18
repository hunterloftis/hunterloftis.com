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
      ko.utils.unwrapObservable(valueAccessor()) ? $(element).fadeIn() : $(element).hide();
    }
  };
  
  // Main
  
  $(document).ready(function() {
    bindVM();
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
      { value: 'design', verb: 'promote', noun: 'beautiful design.' },
      { value: 'realtime', verb: 'enable', noun: 'realtime interactions.' },
      { value: 'skookum', verb: 'work at', noun: 'Skookum.' }
    ]);
    this.activeTopic = ko.obs(this.topics()[0]);
    this.activeVerb = ko.dobs(function() {
      return this.activeTopic().verb;
    }, this);
    
    this.activeTopic.subscribe(function(topic) {
      _gaq.push(['_trackEvent', 'topics', 'select', topic.noun]); 
    });
  }
  
  function bindVM() {
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
  }
  
})($, ko);