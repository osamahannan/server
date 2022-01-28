const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({

    teamName: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    matchResult: {
        type: String,
        required: true,
        trim: true,
    },
    matchCost: {
        type: Number,
        required: true,
        trim: true,
    },
    annihilatorScore: {
        type: String,
        required: true,
        trim: true,
    },
    opponentScore: {
        type: String,
        required: true,
        trim: true,
    },
    tossResult: {
        type: String,
        required: true,
        trim: true,
    },
    annihilatorOver: {
        type: Number,
        required: true,
        trim: true,
    },
    opponentOver: {
        type: Number,
        required: true,
        trim: true,
    },
    ManofTheMatch: {

        playerName: {
            type: String,
            // required: true,
            trim: true,
        },
        category: {
            type: String,
            // required: true,
            trim: true
        },
        runScored: {
            type: Number,
            // required: true,
            trim: true
        },
        ballPlayed: {
            type: Number,
            // required: true,
            trim: true
        },
        sixes: {
            type: Number,
            // required: true,
            trim: true
        },
        fours: {
            type: Number,
            // required: true,
            trim: true
        },
        overBowled: {
            type: Number,
            trim: true
        },
        runGiven: {
            type: Number,
            trim: true
        },
        wicketTaken: {
            type: Number,
            trim: true
        }
    },

})

// hashing the password
// userSchema.pre('save', async function (next) {

//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);
//         this.cpassword = await bcrypt.hash(this.cpassword, 12);
//     }
//     next();
// })

// generating token
// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (err) {
//         console.log(err)
//     }
// }

// stored the message
// userSchema.methods.addMessage = async function (name, email, phone, message) {
//     try {
//         this.messages = this.messages.concat({ name, email, phone, message })
//         await this.save();
//         return this.messages;
//     } catch (error) {
//         console.log(error);
//     }
// }

// collection creation 
const User = mongoose.model('USER', userSchema);
module.exports = User;