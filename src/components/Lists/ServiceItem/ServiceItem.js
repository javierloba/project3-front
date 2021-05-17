import React, { Component } from 'react'

import { withAuth } from '../../../context/auth.context';
import { withService } from '../../../context/service.context';

function ServiceItem({name, image, duration, description, price}) {

    return (
        <div>
            <h3>{name}</h3>
            <img url={image} />
            <p>{duration}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default withAuth(withService(ServiceItem));