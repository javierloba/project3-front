import React from "react";
import ServiceList from '../../components/Lists/ServiceList/ServiceList';
//import ReserveList from '../../components/Lists/'
import ClientList from '../../components/Lists/ClientList/ClientList';
import WorkerList from '../../components/Lists/WorkerList/WorkerList';
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context'

function AdminHome() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Workers
          </button>
        </h3>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul>
              <li>
              <WorkerList />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h3 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Clients
          </button>
        </h3>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ClientList />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h3 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsedThree"
            aria-expanded="false"
            aria-controls="flush-collapsedThree"
          >
            Services
          </button>
        </h3>
        <div
          id="flush-collapsedThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ServiceList />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h3 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Reserves
          </button>
        </h3>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p>Reserve list not done</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(withUser(withWorker(withService(withReserve(AdminHome)))));