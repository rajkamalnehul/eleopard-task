/** @format */

import React from "react";
import Card from "./CommonCard/Card";

function Home(props) {
  const { IndustryDetails } = props;
  return (
    <div className="container pt-5 pb-3">
      <div className="row">
        {IndustryDetails.map((details) => (
          <div className="col-xl-4 col-sm-6" style={{ marginBottom: "30px" }}>
            <Card
              Path={`/details/${details.id}`}
              Title={details.industryname}
              IndustryType={details.industrytype}
              ContactPerson={details.contactperson}
              EmployeeCount={details.employeecount}
              ContactEmail={details.contactemail}
              Status={details.status}
              ContactNumber={details.contactnumber}
              CardImage={details.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
