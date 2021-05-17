import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../../../context/auth.context";

function AnonRoute({ component: ComponentToShow, isLoggedIn, ...rest }) {
    console.log(ComponentToShow);
    return (
        <Route
        render={(props) => {
            !isLoggedIn ? (
            <ComponentToShow {...props} />
            ) : (
            <Redirect to={{ pathname: "/home" }} />
            );
        }}
        />
    );
}

export default withAuth(AnonRoute);
