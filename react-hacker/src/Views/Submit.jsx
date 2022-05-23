import React from "react";
import Navbar from "../components/Navbar";
import SubmitForm from "../components/SubmitForm";
import "./Submit.css";

function Submit() {
  return (
    <table>
      <tr>
        <Navbar />
      </tr>
      <tr>
        <SubmitForm />
      </tr>
    </table>
  );
}
export default Submit;
