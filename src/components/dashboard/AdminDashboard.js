import React from "react";
import "../../styles/dashboard/AdminDashboard.css";

function AdminDashboard() {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="py-3">
      <div
        className="admin-verify-title my-auto"
        style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}
      >
        <span className="adminVerifyTitleBox">List of all Scholarships offered by Scholarship Providers</span>
      </div>

      <div className="py-3 mx-5 admin-verify-component">
        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center admin-verify-list-title">
          DAAD Scholarship Germany
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-pilled btn-primary" onClick={() => handleClick("/admin-dashboard/scholarship-applicants")}>
              View all applicants
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center admin-verify-list-title">
            SDEF Scholarship
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-pilled btn-primary" onClick={() => handleClick("/admin-dashboard/scholarship-applicants")}>
              View all applicants
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center admin-verify-list-title">
          Vidyadhan Scholarship
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-pilled btn-primary" onClick={() => handleClick("/admin-dashboard/scholarship-applicants")}>
              View all applicants
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center admin-verify-list-title">
            Einstein Scholarship
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-pilled btn-primary" onClick={() => handleClick("/scholarship-applicants")}>
              View all applicants
            </button>
          </div>
        </div>

        <div className="d-flex mx-5 py-2">
          <div className="col-8 px-3 py-2 d-flex align-items-center admin-verify-list-title">
            Saksham Scholarship
          </div>
          <div className="col-1"></div>
          <div className="d-grid col-3">
            <button type="button" className="btn btn-pilled btn-primary" onClick={() => handleClick("/admin-dashboard/scholarship-applicants")}>
              View all applicants
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
