import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import pubSeed from './data/pubSeeds.js'
import userSeed from './data/userSeeds.js'
import User from '../models/user.js'
import Pub from '../models/pub.js'


const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('database has connected')

    await mongoose.connection.db.dropDatabase()
    console.log('database Dropped!!')
    
    const users = await User.create(userSeed)
    
    const pubsWithUsers = pubSeed.map(pub => {
      pub.pubOwner = users[0]._id
      return pub
    })

    const pubs = await Pub.create(pubsWithUsers)
    //console.log('🚀 ~ file: seeds.js ~ line 25 ~ seedDatabase ~ pubs', pubs)


    console.log(`🌱 DB seeded with ${pubs.length} pubs and ${users.length} users`)

    await mongoose.connection.close()
    console.log('*********CLOSED********')
  } catch (error) {
    await mongoose.connection.close()
    console.log('********ERROR - CLOSED  SEE BELOW********')
    console.log(error)
  }
}

seedDatabase()