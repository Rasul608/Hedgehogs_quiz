'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        img: 'https://static.tildacdn.com/tild6230-6431-4962-a630-323935653835/maxresdefault.jpg ',
        question: 'Продолжите фразу: «Я буду устанавливать сейчас все…»',
        topic_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://optim.tildacdn.com/tild6135-3236-4532-b637-316162623134/-/format/webp/2678cab2f54436fcb579.jpg',
        question: 'Продолжите фразу: «С какой стати, вы меня извините?! Я скандал такой …»',
        topic_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://optim.tildacdn.com/tild6632-3361-4637-b166-643863366131/-/format/webp/SwoleDogeVSCheems.jpg',
        question: 'Какой породы собаки с мема «Качок Доге и Чимс»?',
        topic_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://optim.tildacdn.com/tild3338-3262-4362-b833-323563346364/-/format/webp/4a66d7da5d9aeedf_192.jpg',
        question: 'Что сильнее всего, по мнению Доминика Торетто?',
        topic_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://media1.tenor.com/m/KPPKsxJq5gYAAAAd/%D1%82%D1%80%D1%8F%D1%81%D0%BA%D0%B0-%D0%BD%D0%B5-%D1%82%D1%80%D1%8F%D1%81%D0%B8%D1%81%D1%8C.gif',
        question: 'Причина тряски?',
        topic_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://sun9-57.userapi.com/impg/ZOTlHWrMtrpSQK-4R4BjWp4F3m10JVe9y8wSRg/28LtiFc3atI.jpg?size=2426x1558&quality=95&sign=3fd830c26ea7e2ba16eb5c7eeb2ccd6f&type=album',
        question: 'Что с ним?',
        topic_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/001-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/002-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/003-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/004-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/005-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/009-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/010-2-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/014-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://opis-cdn.tinkoffjournal.ru/mercury/013-sexy-pes.jpg',
        question: 'Это игрушка 18+ или товар для собак?',
        topic_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};

