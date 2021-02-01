/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details(props) {
  const { IndustryDetails } = props;
  const { Id } = useParams();

  return (
    <div>
      <div className="container pt-4 pb-4">
        <div className="row ">
          {IndustryDetails.filter((details) => details.id == Id).map(
            (details) => (
              <div className="col-md-12 col-lg-6">
                <div className="left">
                  <img
                    className="img-fluid"
                    alt="industryimage"
                    src={details.image}
                    style={{ width: "100%" }}
                  />
                  <br />
                  <br />
                  <h4 className="card-title" style={{ textDecoration: "none" }}>
                    {details.industryname}
                  </h4>
                  <p className="midHeading mt-3">Long Description:</p>
                  <p className="dsc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </div>
              </div>
            )
          )}
          {IndustryDetails.filter((details) => details.id == Id).map(
            (details) => (
              <div class="col-md-12 col-lg-6">
                <div className="right-card">
                  <h5>Industry Type</h5>

                  <div>
                    <div
                      className={`badge  mt-1 text-white ${
                        details.industrytype == "Micro Scale"
                          ? " hacker"
                          : details.industrytype == "Small Scale"
                          ? " hipster"
                          : details.industrytype == "Medium Scale"
                          ? " hustler"
                          : "visionary"
                      }`}
                    >
                      {details.industrytype}
                    </div>
                  </div>
                  <br />

                  <div>
                    <span className="midHeading">Contact Person:</span>
                    <br />
                    {details.contactperson}
                    <br />
                    <br />
                    <span className="midHeading"> Contact Email:</span>
                    <br />
                    <a href={`mailto:${details.contactemail}`}>
                      {details.contactemail}
                    </a>
                    <br />
                    <br />
                    <span className="midHeading"> Contact Number:</span>
                    <br />
                    {details.contactnumber}
                    <br />
                    <br />
                    <span className="midHeading">Employee Count:</span>
                    <br />
                    {details.employeecount}
                    <br />
                    <br />
                    <span className="midHeading">Status:</span>
                    <br />
                    {details.status}
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
