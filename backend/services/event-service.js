const EventModel = require('../models/event-model')
const TokenService = require('./token-service')
const EventDto = require('../dtos/event-dtos')
const CalendarModel = require('../models/calendar-model')
const { default: mongoose } = require('mongoose')
class EventService {
    async newEvent(title, type, content, data_start, data_end, calendar, refreshToken){
        const owner = TokenService.validateRefreshToken(refreshToken)
        const calendar_id = await CalendarModel.findOne({title: calendar, owner: owner.id})
        // console.log(calendar_id._id)
        const event = await EventModel.create({title: title, type: type, content: content, data_start: data_start, data_end: data_end, calendar: calendar_id._id})
        const eventDto = new EventDto(event)
        // console.log(event)
        return {event: eventDto}
    }
    async removeEvent(id, refreshToken){
        const event = await EventModel.deleteOne({_id: id})
        return event
    }
    async getEvents(id, refreshToken){
        const owner = TokenService.validateRefreshToken(refreshToken)
        // const calendar = await CalendarModel.findOne({title: title, owner: owner.id})
        const events = await EventModel.find({calendar: id})
        // console.log(events)
        //console.log(post)
        return {events: events}
    }
    
    async updEvent(title, type, content, refreshToken){
        if(title){
            await EventModel.updateOne({_id: id}, {title: new_title})
        }
        if(type){
            await EventModel.updateOne({_id: id}, {type: type})
        }
        if(content){
            await EventModel.updateOne({_id: id}, {content: content})
        }
        return
    }
   
}

module.exports = new EventService()
