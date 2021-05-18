import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { withAuth } from '../../../context/auth.context';
import { withUser } from '../../../context/user.context';
import { withWorker } from '../../../context/worker.context';
import { withService } from '../../../context/service.context';
import { withReserve } from '../../../context/reserve.context';

function WebCalendar() {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
        console.log(date.toLocaleDateString())
    }

    return (
        <div>
        <Calendar 
        onChange={onChange} 
        value={date} 
        minDetail="year"
        />
        {date.toLocaleDateString()}
        </div>
    )
}

export default withAuth(withUser(withWorker(withService(withReserve(WebCalendar)))));