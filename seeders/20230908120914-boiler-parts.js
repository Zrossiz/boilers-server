'use strict';
const { faker } = require('@faker-js/faker');

const boilerManufacturers = [
  'Ariston',
  'Chaffoteaux&Maury',
  'Baxi',
  'Bongioanni',
  'Saunier Duval',
  'Buderus',
  'Strategist',
  'Henry',
  'Northwest',
];

const partsManufacturers = [
  'Azure',
  'Gloves',
  'Cambridgeshire',
  'Salmon',
  'Montana',
  'Sensor',
  'Lesly',
  'Radian',
  'Gasoline',
  'Croatia',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'BoilerParts',
      [...Array(100)].map(() => ({
        boiler_manufacturer:
          boilerManufacturers[
            Math.floor(Math.random() * boilerManufacturers.length)
          ],
        price: faker.number.int(50000),
        parts_manufacturer:
          partsManufacturers[
            Math.floor(Math.random() * partsManufacturers.length)
          ],
        vendor_code: 1234,
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify(
          [...Array(7)].map(
            () => `${faker.image.technics()}?random=${faker.number.int(30)}`,
          ),
        ),
        in_stock: faker.number.int(1),
        bestsellers: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.number.int(3),
        compatibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },
  async down(queryInterface) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  },
};
