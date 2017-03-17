import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  food: attr('number', { defaultValue: 0 }),
  metal: attr('number', { defaultValue: 0 }),
  wood: attr('number', { defaultValue: 0 }),

  user: belongsTo('user')
});
