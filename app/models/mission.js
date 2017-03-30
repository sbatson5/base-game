import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  reward: attr(),
  duration: attr('number'),
  description: attr('string'),
  cost: attr(),
  probability: attr('number'),
  isCompleted: attr('boolean')
});
