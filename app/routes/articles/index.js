import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('friends/show').get('articles');
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
    save(model) {
      model.save();
      return false;
    }
  }
});
