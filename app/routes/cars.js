import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  queryParams: {
    page: {
      refreshModel: true
    },
    perPage: {
      refreshModel: true
    },
    search: {
      refreshModel: true
    }
  },

  page: 1,

  model(params) {
    params.paramMapping = {
      page: "page",
      perPage: "limit",
      total_pages: "total_pages",
      total_count: "total_count",
      q: {
        name: Ember.$.trim(params.search),
      }
    };
    return this.findPaged('car', params);
  },

  actions: {
    queryChanged() {
      this.refresh();
    }
  }


});
