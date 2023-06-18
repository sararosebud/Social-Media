const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
// schema to create a user model

const userSchema = new Schema(
    {
     
        username: {
          
            type: String, 
            unique: true,
            required: true, 
            max_length: 60, 
            lowercase: true, 

        }, 

        email: {
                type: String,
                trim: true,
                lowercase: true,
                unique: true,
                required: 'Email address is required',
                validate: [validateEmail, 'Please enter a valid email address'],
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        }, 

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'User',
            },
        ], 
    }, 
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      },
   
);

// Create a virtual property 'friendCount' that retrieves the length of the user's friends array field on query

userSchema 
      .virtual('friendCount')
      // Getter
      .get(function (){
        return this.friends.length;

      });


// Initialize  User model
const User = model('User', userSchema)

module.exports = User;
