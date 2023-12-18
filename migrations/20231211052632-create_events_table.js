'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    //TODO add prices
    await queryInterface.createTable('events', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      organizer: Sequelize.STRING,
      type: Sequelize.STRING,
      category: Sequelize.STRING,
      location_type: Sequelize.STRING,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      zip: Sequelize.INTEGER,
      occurrence_type: Sequelize.STRING,
      start_date: Sequelize.DATE,
      end_date: Sequelize.DATE,
      display_start_date: Sequelize.BOOLEAN,
      display_end_date: Sequelize.BOOLEAN,
      imageUrl: Sequelize.STRING,
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
    }, {
      timestamps: true
    }
      )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('events');
  }
};
