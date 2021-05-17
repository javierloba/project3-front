import React from 'react';
import ClientList from '../../Lists/ClientList/ClientList'

export default function Acordion() {
    return (
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                    <h3 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Reservas
                        </button>
                    </h3>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                        <ul>
                            <li><p>Hola</p></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h3 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Promociones
                        </button>
                    </h3>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                        <ClientList />
                        </div>
                    </div>
                    </div>
                </div>
    )
}
