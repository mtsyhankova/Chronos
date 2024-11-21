import $api from '../http/index'

export default class EventService {
    static async newEvent(title, type, content, data_start, data_end, calendar) {
        return $api.post('/newEvent', { title, type, content, data_start, data_end, calendar })
    }

    static async getEvents(id) {
        return $api.get(`/getEvent/${id}`)
    }
}