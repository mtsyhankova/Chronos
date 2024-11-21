module.exports = class EventDto {
    title;
    type;
    content; 
    data_start;
    data_end;
    calendar;

    constructor(model) {
        this.title = model.title
        this.type = model.type
        this.content = model.content
        this.data_start = model.data_start
        this.data_end = model.data_end
        this.calendar = model.calendar
    }
}