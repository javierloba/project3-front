import React from "react";
import { withAuth } from "../../context/auth.context";
import { withUser } from "../../context/user.context";
import { withWorker } from "../../context/worker.context";
import { withService } from "../../context/service.context";
import { withReserve } from "../../context/reserve.context";
import AdminHome from "./AdminHome";
import ClientHome from "./ClientHome";
import WorkerHome from "./WorkerHome";

function Home(props) {
  let user = props.user.birthday;
  let role = props.user.role;

  return (
    <div className="App">
      {user ? <ClientHome /> : null}
      {role === "Admin" ? (
        <AdminHome />
      ) : role === "Worker" ? (
        <WorkerHome />
      ) : null}
    </div>
  );
}

export default withAuth(withUser(withWorker(withService(withReserve(Home)))));
