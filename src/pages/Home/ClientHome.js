import React from "react";
import './ClientHome.css'
import { withAuth } from "../../context/auth.context";
import { withUser } from "../../context/user.context";
import { withWorker } from "../../context/worker.context";
import { withService } from "../../context/service.context";
import { withReserve } from "../../context/reserve.context";
import ClientNavbar from "../../components/General/Navbar/ClientNavbar";

import HomeUserAccordion from "../../components/General/Acordion/HomeUserAccordion";

function ClientHome() {
  return (
    <div>
      <ClientNavbar />
      <div className="client-home">
        <HomeUserAccordion />
      </div>
    </div>
  );
}

export default withAuth(
  withUser(withWorker(withService(withReserve(ClientHome))))
);
