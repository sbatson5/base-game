import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  food: attr('number', { defaultValue: 0 }),
  metal: attr('number', { defaultValue: 0 }),
  wood: attr('number', { defaultValue: 0 }),
  gold: attr('number', { defaultValue: 0 }),
});
