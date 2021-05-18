import React from 'react';
import { withAuth } from '../../../context/auth.context';
import { withUser } from '../../../context/user.context';
import { Link } from 'react-router-dom';

function ClientItem({id, name, surname, email, phone_number, client_antiquity, birthday}) {

<<<<<<< HEAD
    // refreshState() {
    //     this.userService.showUsers()
    //       .then(response => {
    //         console.log(response.data);
    //         this.setState({ todos: response.data });
    //       })
    //       .catch(err => console.error(err))
    //   }

    // const deleteUser = () => {
    //     this.userService.deleteUser(id)
    //       .then(() => {
    //         console.log('Deleted');
    //         refreshState();
    //       })
    //       .catch(err => console.error(err))
    //   }

=======
>>>>>>> 79b510bd56d53793c4a127b744fd66ec8e217605
    return (

        <div className="list-group App">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{name} {surname}</h5>
            </div>
            <p className="mb-1">E-mail: {email} </p>
            <p className="mb-1">Teléfono: {phone_number}</p>
            <small>Fecha de nacimiento: {birthday}</small>
            <small><Link to={`/home/user/editarCliente/${id}`} className="btn btn-primary btn-sm" role="button">Editar</Link></small>
<<<<<<< HEAD
            {/*<small><button onClick={() => deleteUser()} className="btn btn-primary btn-sm" role="button">Eliminar</button></small>*/}
=======
           
>>>>>>> 79b510bd56d53793c4a127b744fd66ec8e217605
        </div>
    )
}

export default withAuth(withUser(ClientItem));
