const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required : false
    },
    surname: {
        type: String,
        required : false,
    },    
    age: {
        type: Number,
        required : false,
        min: 16,
    },
    position:{
        type: String,
        required: false,
        enum : ['GK','DF','MF','FW'],
        uppercase : true,
    },
    team:{
        type: String,
        required: false,
        uppercase: true, 
        enum : ['REAL MADRID' , 'FC BARCELONA', 'PSG ', 'BAYER MUNINCH', 'BORUSSIA DORTMUND'],
    }
})
const Player = mongoose.model('Player', playerSchema);
module.exports = Player;