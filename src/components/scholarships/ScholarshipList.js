import React from "react";
import "../../styles/scholarships/ScholarshipList.css";

function ScholarshipList() {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <div
        className="scholarship-details-title my-auto "
        style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}
      >
        <span className="scholarshipTitleBox">List of Scholarships</span>
      </div>

      <div className="py-4 mx-5 scholarship-list-component">
        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center scholarship-list-title">
          DAAD Scholarship Germany
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button
              type="button"
              className="btn btn-pilled btn-primary"
              onClick={() => handleClick("/scholarship-details")}
            >
              Apply
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center scholarship-list-title">
            Digital India Scholarship
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center scholarship-list-title">
            SDEF Scholarship
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center scholarship-list-title">
          K.C. Mahindra Scholarships For Post-Graduate Studies Abroad
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center scholarship-list-title">
            Aditya Birla Scholarship
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center scholarship-list-title">
            Saksham Scholarship
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipList;
