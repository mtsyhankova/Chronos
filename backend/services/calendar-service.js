const CalendarModel = require('../models/calendar-model')
const TokenService = require('./token-service')
const UserModel = require('../models/user-model')
const CalendarDto = require('../dtos/calendar-dtos')

const ApiError = require('../exceptions/api-error')

const { isObjectIdOrHexString } = require('mongoose')
const uuid = require('uuid')
const mailService = require('./mail-service')
const { Result } = require('express-validator')

class CalendarService {
    async newCalendar(title, color, refreshToken) {
        // const creator = await UserModel.findOne({refreshToken})
        const userDto = TokenService.validateRefreshToken(refreshToken)
        const inviteLink = uuid.v4()
        const calendar = await CalendarModel.create({title: title, color: color, owner: userDto.id, inviteLink: inviteLink})
        const calendarDto = new CalendarDto(calendar)
        return { calendar: calendarDto }
    }
    async removeCalendar(id, refreshToken) {
        const userDto = TokenService.validateRefreshToken(refreshToken)
        // console.log(id)
        const candidate = await CalendarModel.findById(id)
        // console.log(candidate)
        // if(candidate.owner != userDto.id){
        //     return new Error("U are not owner")
        // }
        const calendarData = await CalendarModel.deleteOne({ _id: id })
        return calendarData
    }
    async getCalendar(refreshToken) {
        const userDto = TokenService.validateRefreshToken(refreshToken)
        const calendar = await CalendarModel.find({ owner: userDto.id })
        const chld = await CalendarModel.find({members: userDto.id})
        chld.forEach(element =>{
            calendar.push(element)
        })
        return calendar 
    }

    async getMembers(id, refreshToken) {
        const userDto = TokenService.validateRefreshToken(refreshToken)
        const owner_id = await CalendarModel.findById(id).select('owner -_id')
        const owner = await UserModel.findById(owner_id.owner)
        const members_id = await CalendarModel.find({ _id: id }).select('members -_id')
        const resp = []
        resp.push(owner)
        for(const element of members_id){
            const aboba = await UserModel.findById(element.members)
            resp.push(aboba)
        }
        return resp
    }
    
    async getDataMembers(link) {
        const cal_data = await CalendarModel.find({ inviteLink: link })
        const user_data = await UserModel.find({ _id: cal_data[0].owner.toString() })
        const rezult = user_data[0].email +'/'+cal_data[0].title
        return rezult
    }
    
    async updataCalendar(id, title, color, refreshToken) {
        const userDto = TokenService.validateRefreshToken(refreshToken)
        const calendar = await CalendarModel.findById(id)
        if (calendar.owner.toString() !== userDto.id) {
            throw ApiError.BadRequest('User not owner this calendar')
        } else {
            await CalendarModel.updateOne({ _id: id }, { title: title })
            await CalendarModel.updateOne({ _id: id }, { color: color })

        }
    }
    
    async addNewMember(id){
        const inviteLink = await CalendarModel.find({_id:id})
        return inviteLink
    }
    async deleteMember(id, login){
        const member = await CalendarModel.updateOne({_id: id}, {pull: {members: login}})
        return member
    }
}

module.exports = new CalendarService()
