import React from 'react';
// the imports
import { Calendar, Views, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'


const localizer = momentLocalizer(moment)
const MyCalendar = () => {
    
   // const views = {
   //     month: true,
   //     week: true,
   //     day: true,
   //     agenda: true
   // }
 
    return (
    
    <Calendar 
    localizer={localizer} 
    
    //defaultView = {'month'}
    views={[Views.MONTH, Views.WEEK, Views.DAY]}
    style={{ height: 300, width: '25%', backgroundColor: 'yellow', color: 'blue', boxSizing: 'border-box'}}
    
    //events={myEventsList}
    startAccessor="start"
    endAccessor="end"
    
    />
    );
}

export default MyCalendar;
