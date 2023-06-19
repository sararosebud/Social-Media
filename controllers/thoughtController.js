// const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        // .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId},
        { $addToSet: {thoughts: thought._id} },
        {new: true}

      );
      if (!user) {
        return res.status(404).json({
          message: 'Thought Created but no user with that ID'
        });
      }
      
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId},
        { $pull: {thoughts: req.params.thoughtId}},
        { new: true}

      );
      if (!user) {
        res.status(404).json({message: 'thought created but no user with this id'})
      }
      res.json({ message: 'Thought successfully deleted! 👋'});
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }

  },

  // add a thought to a user

  async addThought(req, res) {
    console.log('you are adding a thought');
    console.log(req.body);
       
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId},
        { $addToSet: { thoughts: req.body }},
        {runValidators: true, new: true}
  
      );

      if (!user) {
        return res
        .status(404)
        .json({ message: 'No user found with that ID :(' });
    } 
    res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  


  // add a thought reaction
  async addThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId  },
        { $addToSet: {reactions: req.body}},
        { runValidators: true, new: true }  
      ).populate('userId', 'username');

      if (!thought) {
        res.status(404).json({message: 'no thought with this id'});

      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  }, 

  // remove thought reaction

  async removeThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $pull: {reactions: { reactionId: req.params.reactionId}}},
        { runValidators: true, new: true }
      )
      if (!thought) {
        res.status(404).json({message: 'no thought with this id'});

      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  }, 
   



};