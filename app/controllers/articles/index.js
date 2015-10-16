import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ["borrowed", "returned"],
  contentDidChange: Ember.observer('model.[]', function() {
    console.log("Called when we add or remove an article because the .[] handler updates when the collection content changes")
  })
});
