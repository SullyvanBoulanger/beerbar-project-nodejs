#!/usr/bin/env node

const { faker } = require("@faker-js/faker");
const Bar = require("../models/bar.model");

async function createFakeBars(nb) {
  for (let i = 0; i < nb; i++) {
    try {
      await Bar.create({
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        tel: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        description: faker.lorem.sentences(3),
      });
    } catch (err) {
      console.error(err);
    }
  }
}

// Création de 5 bars
createFakeBars(5);
