import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  resetController(controller, isExiting) {
    if (isExiting){
      var model = controller.get('model');
      if (model.get('isNew')) {
        // DS#destroyRecord() to remove it from the store.
        model.destroyRecord();
      }
    }
  },
  actions: {
    save() {
      var model = this.modelFor('articles/new');

      model.save().then(() => {
        this.transitionTo('articles');
      });
    },
    cancel(){
      this.transitionTo('articles')
    }
  }
});
