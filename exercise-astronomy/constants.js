module.exports = {
  PORT: 3000,
  URL: "http://localhost",
  PUBLIC: "/public",

  BADGES: {
    CREATED_USER: {
      name: "My first day as astro-rookie!",
      info: "given by joining to astronomy guild",
      points: 10,
    },
    FIRST_NEA: {
      name: "First NEA discovered!",
      info: "given by discovering your first near-earth asteroid",
      points: 100,
    },
    FIRST_NEC: {
      name: "First NEC discovered!",
      info: "given by discovering your first near-earth comet",
      points: 100,
    },
    FIVE_DISCOVERINGS: {
      name: "Road to NE-lhalla!",
      info: "given by discovering 5 Objects between NEAs and NECs",
      points: 500,
    },
    TEN_DISCOVERINGS: {
      name: "Master of universe!",
      info: "given by discovering 10 Objects between NEAs and NECs",
      points: 1000,
    },
    ALL_PREVIOUS_BADGES: {
      name: "The best astronomer!",
      info: "given by obtaining all previous badges",
      points: 10000,
    },
  },
};
