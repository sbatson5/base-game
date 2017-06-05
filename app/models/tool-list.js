import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  requirements: attr(),
  costs: attr()
});
