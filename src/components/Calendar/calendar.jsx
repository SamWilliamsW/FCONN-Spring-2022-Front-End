import React from 'react';
import { Calendar, Views, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

// React-big-calendar API component.  See Readme for more info
// Basic Calendar container, call <MyCalendar/> and import to place in another component

const localizer = momentLocalizer(moment)
const MyCalendar = () => {
    
 
    return (
    
    <Calendar 
    localizer={localizer} 
    
    //defaultView = {'month'}
    //events={myEventsList}
    views={[Views.MONTH, Views.WEEK, Views.DAY]}
    style={{ height: 300, width: '25%', backgroundColor: 'yellow', color: 'blue', boxSizing: 'border-box'}}
    
 
    startAccessor="start"
    endAccessor="end"
    
    />
    );
}

export default MyCalendar;
