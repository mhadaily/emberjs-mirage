import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: '/',  // Using Mirage so we don't need to define for now any endpoint, we're just mocking
  namespace: 'api'
});
