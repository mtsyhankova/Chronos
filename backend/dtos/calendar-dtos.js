module.exports = class CalendarDto {
    title;
    owner;

    constructor(model) {
        this.title = model.title
        this.owner = model.owner
    }
}