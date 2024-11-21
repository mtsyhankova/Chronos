import $api from '../http/index'

export default class CalendarService {
    static async getAll() {
        return $api.get('/getCalendar')
    }
    static async newCalendar(title, color) {
        return $api.post('/newCalendar', { title, color })
    }

    static async upCalendar(id, title, color) {
        return $api.post('/updataCalendar', { id, title, color })
    }

    static async remCalendar(id) {
        return $api.delete(`/removeCalendar/${id}`)
    }

    static async newLinkCal(id) {
        return $api.post('/addNewMember', { id })
    }
    
    static async acceptLinkCal(link) {
        return $api.post('/accept',{link})
    }

    static async getPeopleCal(id) {
        return $api.get(`/getMembers/${id}`)
    }

    static async dataAutorShare(link) {
        return $api.get(`/getDataMemberLink/${link}`)
    }
}