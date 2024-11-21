const { Schema, model } = require('mongoose')

const CalendarSchema = new Schema({
    title: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User', required: false }],
    inviteLink: { type: String, required: false },
    event: { type: Schema.Types.ObjectId, ref: 'Comment' },
    color: { type: String, required: false }
})

module.exports = model('Calendar', CalendarSchema);