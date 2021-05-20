{import React from 'react'
import {withAuth} from "../../context/auth.context";
import { withUser } from "../../context/user.context";
import userService from "../../services/user.service";


export default function UserProfile() {
    constructor(props){
        super(props);
        this.state = {
            services: [],
        };
        this.userService = new userService();
        this.userId = props.user.id
    };

    showDetails() {
        return this.props.showUserDetail();
    };


    return (
        <div>
            <p>Name</p>
        </div>
    )
}}
