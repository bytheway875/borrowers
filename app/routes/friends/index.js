import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('friend', params);
  },
  queryParams: {
    sortBy: {
      refreshModel: true
    },
    sortAscending: {
      refreshModel: true
    }
  }
});
