const UserServices = require('../services/user-service')
const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/api-error')

class UserController {
    async registration(req, res, next) {
        try {
            // console.log(req.body.email)
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }
            const { email, password } = req.body
            const userData = await UserServices.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await UserServices.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: false })
            return res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            // console.log(refreshToken)
            const token = await UserServices.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        }
        catch (e) {
            next(e)
        }
    }

    async activation(req, res, next) {
        try {
            const activationLink = req.params.link
            await UserServices.activation(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        }
        catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await UserServices.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async getMembers(req, res, next) {
        try {
            const users = await UserServices.findOne()
            return res.json(users)
        }
        catch (e) {
            next(e)
        }
    }
    async acceptInvite(req, res, next){
        const { link } = req.body
        const refreshToken = req.cookies.refreshToken
        console.log(link)
        const calendars = await UserServices.acceptInvite(link, refreshToken)
        return calendars
    }
    async leaveCalendar(req, res, next){
        const {id} = req.body
        const refreshToken = req.cookies.refreshToken
        const data = UserServices.leaveCalendar(id, refreshToken)
        return res.json(data)
    }
}

module.exports = new UserController()