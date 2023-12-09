import React from "react";
import "../../styles/dashboard/ScholarshipApplicants.css";

function ScholarshipApplicants() {
  return (
    <div className="py-3 col-10 mx-auto">
      <div className="d-flex py-3 applicants-components my-4">
        <div className="d-flex align-items-center ps-4 col-8 applicant-component-title">
          Scholarship Name
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-primary">
            Execute Payout
          </button>
        </div>
      </div>

      <div className="py-3 ps-4 applicants-id-component">
        <div className="py-2 applicants-id-title">List of all the applicants for scholarship</div>

        <div>
          <div className="py-1">1. User 1's polygon id</div>
          <div className="py-1">2. User 2's polygon id</div>
          <div className="py-1">3. User 3's polygon id</div>
          <div className="py-1">4. User 4's polygon id</div>
          <div className="py-1">5. User 5's polygon id</div>
          <div className="py-1">6. User 6's polygon id</div>
          <div className="py-1">7. User 7's polygon id</div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipApplicants;
