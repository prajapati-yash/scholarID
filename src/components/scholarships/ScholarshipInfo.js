import React from "react";
import "../../styles/scholarships/ScholarshipInfo.css";

function ScholarshipInfo() {
  return (
    <div className="col-11 mx-auto">
      <div
        className="scholarship-title my-auto"
        style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}
      >
        <span className="scholarshipTitleBox">MYSY Scholarship</span>
      </div>
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
              1. What is MYSY Scholarship?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <li className="accordion-list-item">
                Mukhymantri Yuva Swavalamban Yojana or MYSY Scholarship is a
                scholarship scheme that is offered to the economically weaker
                section students of Gujarat. All those students who wish to
                pursue higher education like diploma courses, engineering,
                pharmacy course, medical course, etc apply for MYSY scholarship
                every year.
              </li>
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
              2. Types of Scholarship Under MYSY Scholarship
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="accordion-list-item">
                There are three types of scholarships that are offered under the
                MYSY Scholarship which are as follows:-
                <li>Tuition fee grant</li>
                <li>Hostel grant</li>
                <li>Book/instruments grant</li>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3 accordion-box-border">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed btn rounded-pill shadow-none accordion-heading"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. Which documents are required to apply for scholarship?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="accordion-list-item">
                1. Income certificate. <br /> 2. Adhaar Card. <br /> 3.
                Self-declaration form. <br /> 4. Certificate from the institute
                for new students. <br /> 5. Renewal certificate from institute.{" "}
                <br /> 6. Self-declaration for non-IT returns. <br /> 7. 10th
                and 12th standard mark sheet. <br /> 8. Admission letter and fee
                receipt. <br /> 9. Bank account proof.Hostel admission letter
                and fee receipt. <br /> 10. Affidavit (non-judicial stamp paper
                Rs 20). <br /> 11. Recent passport-size photo.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-3 ps-2">
          <button
            type="button"
            className="btn btn-primary verify-details-button px-3 py-2"
          >
            Verify your documents for scholarship
          </button>
          <div className="d-flex py-2" style={{ fontWeight: "600" }}>
            Marks of semester 1 (&gt; 70%)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipInfo;
