import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null,        //pass in
  articleStates: null,  //pass in
  stateChanged: Ember.observer('article.state', function(){
    console.log('article changed state.')
  }),
  actions: {
    saveArticle(){
      let article = this.get('article');

      if (article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
