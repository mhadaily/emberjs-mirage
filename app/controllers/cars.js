import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams:['page', 'limit', 'perPage','search'],
  page: 1,
  limit: 10,
  perPage: 10,
  search: ''
});
