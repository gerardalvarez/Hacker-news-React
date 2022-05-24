import React from "react";
import Navbar from "../components/Navbar";
import SubmitForm from "../components/SubmitForm";
import Comment from "../components/Comment";
import "./Submit.css";

function Submit() {
  return (
    <table>
      <tr>
        <Navbar />
      </tr>
      <tr>
        <SubmitForm />
          <Comment/>
      </tr>
    </table>
  );
}
export default Submit;
