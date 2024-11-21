const { events } = require("../models/user-model")
const EventService = require("../services/event-service")


class EventController {
    async newEvent(req, res, next){
        try{
            const {title, type, content, data_start, data_end, calendar} = req.body
            const refreshToken = req.cookies.refreshToken
            const event = await EventService.newEvent(title, type, content, data_start, data_end, calendar, refreshToken)
            return res.json(calendar)
            //const response = async 
        } catch(e){
            console.log(e)
        }
    }
    
    async getEvents(req, res, next){
        try{
            const {id} = req.params
            const refreshToken = req.cookies.refreshToken
            const events = await EventService.getEvents(id, refreshToken)
            return res.json(events)
        } catch(e) {
            console.log(e)
        }
    }

    async removeEvent(req, res, next){
        try{
            const { title, calendar } = req.body
            const refreshToken = req.cookies.refreshToken
            const eventData = await EventService.removeEvent(title, calendar, refreshToken)
            return res.json(eventData)
        } catch(e) {
            console.log(e)
        }
    }

    async updEvent(req, res, next){
        try{
            const{title, new_title, type, content} = req.body
            const refreshToken = req.cookies.refreshToken
            const updData = await EventService.updEvent(title, type, content, refreshToken)
            return res.json(updData)
        }catch(e){
            console.log(e)
        }
    }
}

module.exports = new EventController()