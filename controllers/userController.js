const { ObjectId } = require('mongoose').Types;
const { User, Thought }  = require("../models");
const { Types } = require('mongoose');



module.exports = {
  // get all users
    async getUsers(req, res) {
      try {
        const users = await User.find();
       
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // get a single user
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
        .populate('friends')
        .populate('thoughts') 
          .select('-__v');

        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }

        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // create a new user
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // delete a user
    async deleteUser(req, res) {
      try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
          res.status(404).json({ message: 'no user with that Id' });
        }

        // BONUS Delete user's thoughts as well!!!

        await Thought.deleteMany({ _id: {$in: user.thoughts }});
        res.json ({ message: 'user and thoughts deleted'});

      } catch (err) {
        res.status(500).json(err);
      
      }
 
    },

    // update user
    async updateUser(req,res) {
      try {
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId},
          { $set: req.body},
          { runValidators: true, new: true}

        );
        if (!user) {
          res.status(404).json({ message: 'no user with this id'});

        }
        res.json(user);

      } catch(err) {
        res.status(500).json(err);
      }
    },

    // add a friend to the user's friend list

 

  
    async addFriend(req, res) {
      try {
        const { userId } = req.params;
        const { friendUserId } = req.body; 
        if (!Types.ObjectId.isValid(friendUserId)) {
          return res.status(400).json({ message: 'Invalid friendUserId' });
        }
    
        const user = await User.findOneAndUpdate(
          { _id: userId, friends: { $ne: friendUserId } }, // Ensure the friend is not already in the friends array
          { $push: { friends: friendUserId } },
          { runValidators: true, new: true }
        )
    
        if (!user) {
          return res.status(404).json({ message: 'No user with this ID' });
        }
    
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    }
    
    , 
    

    // delete a freind from the user's friend list

    async removeFriend(req, res) {
      try {
        const { userId, friendId } = req.params;
    
        const user = await User.findByIdAndUpdate(
          userId,
          { $pull: { friends: friendId } },
          { new: true }
        );
    
        if (!user) {
          return res.status(404).json({ message: 'No user with this ID' });
        }
    
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    }
    
    ,
    };





