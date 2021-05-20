import React from 'react';
import './HomeUserAccordion.css';
import ServiceList from '../../Lists/ServiceList/ServiceList';
import ClientReserveList from '../../Lists/ClientReserveList/ClientReserveList';

export default function Acordion() {
    return (
        <div className='activities-cards'>
            <div className="card">
                <div className="card-body">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Servicios
                                </button>
                            </h3>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                        <ServiceList />
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h3 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Reservas
                                </button>
                            </h3>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                        <ClientReserveList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
