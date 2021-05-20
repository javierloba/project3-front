import React from "react";
import './ServiceItem.css';
import { Link } from "react-router-dom";
import { withAuth } from "../../../context/auth.context";
import { withService } from "../../../context/service.context";

import ReserveDate from '../../General/WebCalendar/ReserveDate';

function ServiceItem({
  name,
  image,
  duration,
  description,
  price,
  _id,
  deleteService,
  ...props
}) {
  let user = props.user.birthday;
  let role = props.user.role;

  return (
    <div className="list-group-service">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{name}</h5>
        <small>{price}€</small>
      </div>
      <p className="mb-1">{description}</p>
      <small>{duration} min</small>

      <div>
        {user ? (
          <div>
            <small>
                <ReserveDate worker_id={props.worker_id}/>
            </small>
          </div>
        ) : null}
        {role ? (
          <div className="btn-list">
            <small>
              <Link
                to={`/home/service/editarServicio/${_id}`}
                className="btn btn-primary btn-sm"
                role="button"
              >
                Editar
              </Link>
            </small>
            <small>
              <small>
                <button className="btn btn-primary btn-sm" onClick={() => deleteService(_id)}>
                  Borrar
                </button>
              </small>
            </small>
          </div>
        ) :
        null
        }
      </div>
    </div>
  );
}

export default withAuth(withService(ServiceItem));
