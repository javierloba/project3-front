import React, { Component } from 'react'

import { withAuth } from '../../../context/auth.context';
import { withService } from '../../../context/service.context';

function ServiceItem({name, image, duration, description, price}) {

    return (
        <div class="list-group">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{name}</h5>
                <small>{price}€</small>
                </div>
                <p class="mb-1">{description}</p>
                <small>{duration} min</small>
        </div>
    )
}

export default withAuth(withService(ServiceItem));