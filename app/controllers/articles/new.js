import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  isValid: Ember.computed.readOnly('hasDescription'),
  actions: {
    save(){
      if (this.get('isValid')) {
        // bubble to route
        return true;
      } else {
        this.set('errorMessage', 'You have to provide a description');
        return false;
      }
    },
  }
});
