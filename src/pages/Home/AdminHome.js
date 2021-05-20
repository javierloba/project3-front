import React from "react";
import './AdminHome.css';
import HomeAdminAccordion from "../../components/General/Acordion/HomeAdminAccordion";
import WebCalendar from "../../components/General/WebCalendar/WebCalendar";
import AdminNavbar from "../../components/General/Navbar/AdminNavbar";
import { withAuth } from "../../context/auth.context";
import { withUser } from "../../context/user.context";
import { withWorker } from "../../context/worker.context";
import { withService } from "../../context/service.context";
import { withReserve } from "../../context/reserve.context";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div>
      <AdminNavbar />
      <div className="App home-admin">
        <HomeAdminAccordion />
        <div className="">
          <Link to="/home/admin/listaReservas" className="btn btn-block btn-primary" role="button">
            Gestionar reservas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withAuth(
  withUser(withWorker(withService(withReserve(AdminHome))))
);
