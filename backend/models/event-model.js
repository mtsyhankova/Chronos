const {Schema, model} = require('mongoose')

const EventModel = new Schema({
    title: {type: String, required: true},
    type: {type: String, required: false},
    content: {type: String, required: true},
    data_start: {type: Date, required: true},
    data_end: {type: Date, required: false},
    calendar: {type: Schema.Types.ObjectId, ref: 'Calendar'}
})

module.exports = model('Event', EventModel);