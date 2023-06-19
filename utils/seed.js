const connection = require('../config/connection');
const {User, Thought } = require('../models');

const { getRandomUser, getRandomThought, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

      // Delete the collections if they exist
      let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
      if (userCheck.length) {
        await connection.dropCollection('users');
      }
  
      let emailCheck = await connection.db.listCollections({ name: 'emails' }).toArray();
if (emailCheck.length) {
  await connection.dropCollection('emails');
}
 

      const users = getRandomUser(20);
      const thoughts = getRandomThought(10);

      for (let i = 0; i < 20; i++) {
        const username = getRandomUser();
        const email = getRandomEmail();

        // Check for duplicate username or email
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      console.log('Duplicate user or email:', existingUser);
      continue;
    }


        users.push({
            username,
            email,
        });
        
      }
      await User.collection.insertMany(users);
      await Thought.collection.insertMany(thoughts);

      console.table(users);
      console.table(thoughts);
      console.info('seeding complete');
      process.exit(0);
      
    
    });