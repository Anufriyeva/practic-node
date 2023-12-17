const { Schema, default: mongoose } = require('mongoose');

const animalSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    isVaccinated: { type: Boolean, default: false },
    gender: { type: String, enum: ['male', 'female'], required: true },
    species: { type: String, required: true },
    deletedAt: { type: Date, default: null },
  },
  { versionKey: false, timestamps: true },
);

animalSchema.post('save', (err, data, next) => console.log('tst', test));

const Animal = mongoose.model('animals', animalSchema);

module.exports = Animal;

// const {nanoid} = require('nanoid');

// class Animal {
//     constructor(payload) {
//         this.id = nanoid();
//         this.createdAt = new Date().toISOString();
//         this.updatedAt = new Date().toISOString();
//         this.name = payload.name;
//         this.age = payload.age;
//         this.isVaccinated = payload.isVaccinated;
//         this.gender = payload.gender;
//         this.species = payload.species;

//     }

// }

// module.exports = Animal;