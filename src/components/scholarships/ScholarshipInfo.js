import React from "react";
import "../../styles/scholarships/ScholarshipInfo.css";

function ScholarshipInfo() {
  return (
    <div className="col-11 mx-auto py-4">
      <div
        className="my-3 accordion accordion-box-border"
        id="accordionExample"
      >
        <div className="accordion-item mb-3 accordion-box-border">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed btn rounded-pill shadow-none accordion-heading"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. What is a MYSY Scholarship?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <li className="accordion-list-item">Scholarship Details</li>
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3 accordion-box-border">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed btn rounded-pill shadow-none accordion-heading"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              2. Which documents are required to apply for scholarship?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <li className="accordion-list-item">Documents Details</li>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="verify-details-title my-auto"
          style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}
        >
          <span className="verifyTitleBox">Verify your documents</span>
        </div>

        <div>
          <div className="verify-details-text">Click on the below button to verify your documents!</div>
          <div className="py-3">
            <button type="button" className="btn btn-primary verify-details-button px-4 py-2" >Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipInfo;
