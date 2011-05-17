(function(_, $, ko) {

  // Shorthand
  
  ko.obs = ko.observable;
  ko.obsa = ko.observableArray;
  ko.dobs = ko.dependentObservable;
  
  function ViewModel() {
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
  
  $(document).ready(function() {
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
  });
  
})(_, $, ko);