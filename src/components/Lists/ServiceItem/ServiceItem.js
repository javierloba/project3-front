import React from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../../../context/auth.context';
import { withService } from '../../../context/service.context';
import ServiceItemAdmin from '../../General/Buttons/ServiceItemAdmin/ServiceItemAdmin';
import ServiceItemUser from '../../General/Buttons/ServiceItemUser/ServiceItemUser';


function ServiceItem({name, image, duration, description, price, _id, ...props}) {


    let user = props.user.birthday;
    let role = props.user.role;

    return (
        <div className="list-group App">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small>{price}€</small>
                </div>
                <p className="mb-1">{description}</p>
                <small>{duration} min</small>

                <div>
                {user ? <ServiceItemUser /> : null}
                {role ? <ServiceItemAdmin /> : null}
                </div>
        </div>
    )
}

export default withAuth(withService(ServiceItem));