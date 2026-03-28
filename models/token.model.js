const {Schema, default: mongoose} = require('mongoose')

const TokenSchema = new Schema({
    user : {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken : {type: String, required: true}
})

module.exports = mongoose.model('Token', TokenSchema)