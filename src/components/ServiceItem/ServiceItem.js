import React, { Component } from 'react'

export default function ServiceItem({name, image, duration, description, price}) {

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
