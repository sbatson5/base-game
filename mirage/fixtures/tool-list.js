export default [
  {
    id: 1,
    name: 'Hammer',
    description: 'Used to hammer things',
    requirements: [
      {
        type: 'follower',
        detail: 'any'
      }
    ],
    costs: [
      {
        resource: 'wood',
        value: 50
      }, {
        resource: 'gold',
        value: 10
      }
    ]
  }, {
    id: 2,
    name: 'Bow & Arrow',
    description: 'Like Katniss!',
    requirements: [
      {
        type: 'follower',
        detail: 'hunter'
      }
    ],
    costs: [
      {
        resource: 'metal',
        value: 10
      }, {
        resource: 'wood',
        value: 50
      }, {
        resource: 'gold',
        value: 10
      }
    ]
  }
];
