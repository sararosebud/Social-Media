const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default:() => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            

        },
        

    },
    {
        toJSON: {
            getters: true,
            transform: (doc, ret) => {
              ret.createdAt = moment(ret.createdAt).format('MM-DD-YYYY HH:mm'); // Format the timestamp
              return ret;
            },
          },
          id: false,
        }
      );
      
      module.exports = reactionSchema;