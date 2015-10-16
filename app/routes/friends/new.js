import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  resetController(controller, isExisting) {
    if (isExisting) {
      //Grab the model from the controller
      var model = controller.get('model');
      // verify if the model is in the 'isNew' state, which means it wasn't
      // saved to the backend
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
