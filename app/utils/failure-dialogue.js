export function missingResources(resource) {
  let index = Math.floor(Math.random() * 4);
  return [
    {
      speaker: 'primary',
      text: `${getMoreResourceOptions[index]} ${resource}!`,
      emotion: 'happy'
    }
  ];
};

export function missingFollower(follower) {
  return [
    {
      speaker: 'primary',
      text: `It seems you need a ${follower} to complete this mission`,
      emotion: 'normal'
    }, {
      speaker: 'primary',
      text: 'Perhaps you can figure out a way to recruit one!',
      emotion: 'happy'
    }
  ]
};

export function followerDied(followerName) {
  return [
    {
      speaker: 'primary',
      text: 'I have some awful--truly terrible--news.',
      emotion: 'sad'
    }, {
      speaker: 'primary',
      text: 'We ran out of grape soda. We now only have orange...',
      emotion: 'sad'
    }, {
      speaker: 'primary',
      text: 'But I\'m sure we will get more soon!',
      emotion: 'happy'
    }, {
      speaker: 'primary',
      text: `Also, ${followerName} was shot in the back by bandits and died a horrible death`,
      emotion: 'sad'
    }
  ]
}

const getMoreResourceOptions = [
  'It looks like you are missing some ',
  'You may need to collect a bit more ',
  'This mission will require more ',
  'Why are you even bothering? You don\'t have enough '
];
