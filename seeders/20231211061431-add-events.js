'use strict';
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    //TODO simulate prices
    const maxEvents = 30;
    const minEvents = 1;
    const randomNumEvents = Math.floor(Math.random() * (maxEvents - minEvents) + minEvents);
    const events = Array.from({length: randomNumEvents}, () => {
      const event = {
        imageUrl: faker.image.url(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
      }
      return event;
    });

    await queryInterface.bulkInsert('events', events, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('events', null, {});
  }
};
