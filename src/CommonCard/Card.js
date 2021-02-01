/** @format */

import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function card({
  Path,
  Title,
  ShortDesc,
  IndustryType,
  ContactPerson,
  EmployeeCount,
  ContactNumber,
  ContactEmail,
  Status,
  CardImage,
}) {
  return (
    <div className="card">
      <img
        className="img-fluid"
        alt="Industry"
        style={{ width: "100%", height: "262px" }}
        src={CardImage ? CardImage : ""}
      />

      <div class="card-body middle">
        <Link
          to={{ pathname: Path ? Path : "/home" }}
          style={{ textDecoration: "none" }}
        >
          <h4 class="card-title">{Title ? Title : "Card Tittle"}</h4>
        </Link>

        <p className="tag"></p>

        <div>
          <p className="shortDesc">
            {ShortDesc
              ? ShortDesc
              : "Lorem Ipsum decor Lorem Ipsum decor Lorem Ipsum decor"}
          </p>
          <div className="industry-type">
            <span
              className={`badge mr-1 mt-1 text-white ${
                IndustryType == "Micro Scale"
                  ? " hacker"
                  : IndustryType == "Small Scale"
                  ? " hipster"
                  : IndustryType == "Medium Scale"
                  ? " hustler"
                  : "visionary"
              }`}
            >
              {IndustryType}
            </span>
          </div>
        </div>
      </div>
      <div className="cardfooter">
        <p>
          Contact Person: {ContactPerson ? ContactPerson : "Jack"}
          <br />
          Contact Email:{" "}
          <a style={{ color: "white" }} href={`mailto:${ContactEmail}`}>
            {ContactEmail ? ContactEmail : "example@gmail.com"}
          </a>
          <br />
          Contact Number: {ContactNumber ? ContactNumber : "+91-100010010"}
          <br />
          Employee Count: {EmployeeCount ? EmployeeCount : "0(default)"}
          <br />
          Status: {Status ? Status : " Active(default)"}
        </p>
      </div>
    </div>
  );
}

export default card;
