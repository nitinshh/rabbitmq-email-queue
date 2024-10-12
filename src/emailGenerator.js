const { faker } = require('@faker-js/faker');

function generateRandomEmail() {
  return {
    to: faker.internet.email(),
    subject: faker.lorem.sentence(),
    body: faker.lorem.paragraph()
  };
}

module.exports = { generateRandomEmail };