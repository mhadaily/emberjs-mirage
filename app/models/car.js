import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr(),
  description: DS.attr(),
  thumbnail: DS.attr(),
  mainPicture: DS.attr(),
  name: DS.attr(),
  location: DS.attr()
});
