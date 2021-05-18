import React from 'react';
import { withAuth } from '../../context/auth.context';
import { withService } from '../../context/service.context';
import WebCalendar from '../../components/General/WebCalendar/WebCalendar';

 function ReserveClient() {
    return (
        <div className="App">
            <WebCalendar />
            <input
            type="text"
            name="name"
            //value={fields.name}
            onChange={(e) => this.handleChange(e)}
            />
            <input class="btn btn-primary" type="submit" value="Submit" />
        </div>
    )
}

export default withAuth(withService(ReserveClient));