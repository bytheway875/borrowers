import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  queryParams: ['sortBy', 'sortAscending', 'showReturned'],
  sortAscending: true,
  sortBy: 'firstName',
  showReturned: true,
  actions: {
    setSortBy(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      console.log('Sorting by', fieldName);
      console.log('Sorting Asc?', this.get('sortAscending'));

      return false;
    }
  }
});
