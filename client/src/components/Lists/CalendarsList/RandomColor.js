var randomColor = require('randomcolor');

export function GenerateColor() {
    const colors = randomColor({ count: 3, hue: 'green' });

    document.querySelector(".calendars_list_box:nth-child(1)")
        .style.backgroundColor = colors[0];

    document.querySelector(".calendars_list_box:nth-child(2)")
        .style.backgroundColor = colors[1];

    document.querySelector(".calendars_list_box:nth-child(3)")
        .style.backgroundColor = colors[2];
}