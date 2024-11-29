'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Topics', [
      {
        img: 'https://static.tildacdn.com/tild3539-6261-4133-b533-353532633736/photo.png',
        title: 'Меморина',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://s00.yaplakal.com/pics/pics_original/2/7/0/9361072.png',
        title: 'Это игрушка 18+ или товар для собак?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
