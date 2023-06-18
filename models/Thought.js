const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');



const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1        
    },

    createdAt: {
        type: Date,
        default: Date.now,

      },
  
    
     
    userId: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }],

    reactions: [Reaction]
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

);

// Virtual property that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount')
.get(function () {
  return this.reactions.length;
});

// initialize Thought model

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;