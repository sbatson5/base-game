import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  occupation: attr('string'),
  name: attr('string')
});
