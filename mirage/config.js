import cars from './fixtures/cars';

export default function() {

  this.namespace = 'api';
  this.timing = 400;  // simulate network delay

  this.get('cars',function(schema, request){
    let qp = request.queryParams;
    let page = parseInt(qp.page);
    let limit = parseInt(qp.limit);
    //let search = parseInt(qp.search);//TODO: add search to find proper data
    let start = page * limit;
    let end = start + limit;
    let filtered = cars.slice(start,end);

    return {
      data: filtered.map(attrs => ({
        type: 'cars',
        id: attrs.id,
        attributes: attrs
      })),
      meta: {
        total_pages: parseInt((cars.length)/limit),
        total_count: cars.length,
      }
    };
  });

  this.get('/cars/:id');


  // These comments are here to help you get started. Feel free to delete them.
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
