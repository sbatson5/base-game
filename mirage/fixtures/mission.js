export default [
  {
    id: 1,
    reward: {
      resource: 'wood',
      value: 100
    },
    cost: {
      resource: 'food',
      value: 10
    },
    description: 'Cut down wood',
    duration: 2000,
    isCompleted: false
  }, {
    id: 2,
    reward: {
      resource: 'metal',
      value: 25
    },
    cost: null,
    description: 'Gather metal',
    duration: 1500,
    isCompleted: false
  }, {
    id: 3,
    reward: {
      resource: 'food',
      value: 50
    },
    cost: null,
    description: 'Gather some food',
    duration: 5000,
    isCompleted: false
  }
];
