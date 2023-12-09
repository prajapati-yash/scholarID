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
        <div className="py-2 applicants-id-title">
          List of all the applicants for scholarship
        </div>

        <div>
          <div className="py-1">1. 0xA34.....09v3</div>
          <div className="py-1">2. 0x4f5.....11Rp</div>
          <div className="py-1">3. 0x78W.....3s1L</div>
          <div className="py-1">4. 0x5lP.....d266</div>
          <div className="py-1">5. 0xff8.....4xQ2</div>
          <div className="py-1">6. 0x73d.....11Wq</div>
          <div className="py-1">7. 0x99Z.....J445</div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipApplicants;
