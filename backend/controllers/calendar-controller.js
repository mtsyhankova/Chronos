const CalendarService = require("../services/calendar-service")

class CalendarController {
    async newCalendar(req, res, next) {
        try {
            const { title, color } = req.body
            const refreshToken = req.cookies.refreshToken
            const calendar = await CalendarService.newCalendar(title, color, refreshToken)
            return res.json(calendar)
            //const response = async 
        } catch (e) {
            console.log(e)
        }
    }

    async getCalendar(req, res, next) {
        try {
            const refreshToken = req.cookies.refreshToken
            const calendar = await CalendarService.getCalendar(refreshToken)
            return res.json(calendar)
        } catch (e) {
            console.log(e)
        }
    }

    async removeCalendar(req, res, next) {
        try {
            const { id } = req.params
            // console.log(id)
            const refreshToken = req.cookies.refreshToken
            const calendarData = await CalendarService.removeCalendar(id, refreshToken)
            return res.json(calendarData)
        } catch (e) {
            console.log(e)
        }
    }

    async getMembers(req, res, next) {
        try {
            const { id } = req.params
            const refreshToken = req.cookies.refreshToken
            const members = await CalendarService.getMembers(id, refreshToken)
            return res.json(members)
        } catch (e) {members
            console.log(e)
        }
    }

    async getDataMembers(req, res, next) {
        try {
            const { link } = req.params
            const members = await CalendarService.getDataMembers(link)
            // console.log(link)
            return res.json(members)

        } catch (e) {
            console.log(e)
        }
    }

    async updataCalendar(req, res, next) {
        try {
            const { id, title, color } = req.body
            const refreshToken = req.cookies.refreshToken
            await CalendarService.updataCalendar(id, title, color, refreshToken)
            res.status(200).send("OK");
        } catch (e) {
            next(e)
        }
    }

    async addNewMember(req, res, next) {
        try {
            const { id } = req.body
            const inviteInfo = await CalendarService.addNewMember(id)
            return res.json(inviteInfo)
        } catch (e) {
            next(e)
        }
    }
    async deleteMember(req, res, next){
        const {id, login} = req.body
        const member = CalendarService.deleteMember(id, login)
        return res.json(member)
    }
}

module.exports = new CalendarController()