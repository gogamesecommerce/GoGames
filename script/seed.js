'use strict'

const db = require('../server/db')
const {User, Game, Console} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  await Promise.all([
    Game.create({
      name: 'Destiny',
      publisher: 'activision',
      developer: 'bungie',
      playStationFour: true,
      xBoxOne: true,
      nintendoSwitch: false,
      pc: true,
      genre: 'Sci-fi Shooter',
      multiplayer: true,
      description: 'KILL EM ALIENS!',
      releaseDate: '09-26-2014',
      price: 59.99,
      stock: 100,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Destiny_XBO.jpg/220px-Destiny_XBO.jpg'
    }),
    Game.create({
      name: 'Starcraft II',
      publisher: 'Blizzard',
      developer: 'Blizzard',
      playStationFour: false,
      xBoxOne: false,
      nintendoSwitch: false,
      pc: true,
      genre: 'Real Time Strategy',
      multiplayer: true,
      description: 'THE WITTY WIN',
      releaseDate: '07-27-2010',
      price: 14.99,
      stock: 50,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/StarCraft_II_-_Box_Art.jpg/220px-StarCraft_II_-_Box_Art.jpg'
    }),
    Game.create({
      name: 'Super Smash Bros. Ultimate',
      publisher: 'Nintendo',
      developer: 'Nintendo',
      playStationFour: false,
      xBoxOne: false,
      pc: false,
      nintendoSwitch: true,
      genre: 'Last Man Standing',
      multiplayer: true,
      description: 'SMASH IT UP!',
      releaseDate: '12-07-2018',
      price: 59.99,
      stock: 150,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg'
    }),
    Game.create({
      name: 'Division 2',
      publisher: 'ubisoft',
      developer: 'Massive Entertainment',
      playStationFour: true,
      xBoxOne: true,
      nintendoSwitch: false,
      pc: true,
      genre: 'Action Role-Playing Shooter',
      multiplayer: true,
      description: 'SAVE THE WORLD!',
      releaseDate: '03-15-2019',
      price: 59.99,
      stock: 200,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/The_Division_2_art.jpg/220px-The_Division_2_art.jpg'
    })
  ])

  await Promise.all([
    Console.create({
      name: 'Playstation 4',
      companyName: 'Sony',
      price: 299.99,
      imageUrl: 'https://i.imgur.com/aHjwbd9.png',
      stock: 100
    }),
    Console.create({
      name: 'XboxOne',
      companyName: 'Microsoft',
      price: 249.99,
      imageUrl:
        'https://oyster.ignimgs.com/mediawiki/apis.ign.com/xbox-720/d/de/Xbox_one_console_controller_too.jpg?width=640',
      stock: 150
    }),
    Console.create({
      name: 'Nintendo Switch',
      companyName: 'Nintendo',
      price: 299.99,
      imageUrl:
        'https://oyster.ignimgs.com/mediawiki/apis.ign.com/nintendo-nx/e/eb/Switch--GENERIC3.jpg?fit=bounds&dpr=1&quality=75&crop=16%3A9&width=300',
      stock: 200
    })
  ])

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
