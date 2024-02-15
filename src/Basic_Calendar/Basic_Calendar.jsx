


import React from 'react';
import moment from 'moment';
import Calendar from './Calender';

const events = [
    {
        id: 1,
        title: "Normal Event",
        start: moment("2024-02-15T09:00:00").toDate(),
        end: moment("2024-02-15T10:30:00").toDate(),
        type: 'normal',
        url:"https://us06web.zoom.us/j/86044054600"
    },
    {
        id: 2,
        title: "All-Day Event",
        start: moment("2024-02-15").toDate(),
        end: moment("2024-02-16").toDate(),
        allDay: true,
        type: 'allDay',
        url:"https://us06web.zoom.us/j/86044054600"
    },
    {
        id: 3,
        title: "Busy",
        start: moment("2024-02-15T13:00:00").toDate(),
        end: moment("2024-02-15T16:30:00").toDate(),
        isPrivate:true,
        url:"https://us06web.zoom.us/j/86044054600"
        
    }
];

const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = '';
    switch (event.type) {
        case 'normal':
            backgroundColor = 'lightblue'; // Normal events
            break;
        case 'allDay':
            backgroundColor = 'lightgreen'; // All-day events
            break;
        case 'stretching':
            backgroundColor = 'lightcoral'; // Stretching events
            break;
        default:
            backgroundColor = 'lightgray'; // Default color
    }

    return {
        style: {
            backgroundColor: backgroundColor,
            color: 'black',
            borderRadius: '5px',
            border: '1px solid transparent',
            padding: '2px 5px',
            cursor: 'pointer'
        }
    };
};

const Basic_Calendar = () => {
    const handleEventDrop = ({ event, start, end }) => {
        // Update event start and end times
        event.start = start;
        event.end = end;

        // Perform any additional actions if needed
        console.log("Event dropped:", event);
    };

    return (
        <Calendar
            events={events}
            eventStyleGetter={eventStyleGetter}
            onEventDrop={handleEventDrop} // Handle event drop
            selectable
            resizable
            defaultView="week"
        />
    );
};

export default Basic_Calendar;
