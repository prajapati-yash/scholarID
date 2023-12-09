import React from "react";
import "../../styles/profile/UserProfile.css";

function UserProfile() {
  return (
    <div>
      <div
        className="user-profile-title my-auto"
        style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}
      >
        <span className="userProfileTitleBox">
          List of all Scholarships that you have applied
        </span>
      </div>

      <div>
        <div className="py-4 mx-5 profile-scholarship-component">
          <div className="d-flex mx-5 py-2">
            <div className="col-8 px-3 py-2 d-flex align-items-center profile-scholarship-title">
              MYSY Scholarship
            </div>
            <div className="col-1"></div>
            <div className="d-grid col-3">
              <button
                type="button"
                className="btn btn-success"
                // onClick={() => handleClick("/scholarship-details")}
              >
                Received ✅
              </button>
            </div>
          </div>

          <div className="d-flex mx-5 py-2">
            <div className="col-8 px-3 py-2 d-flex align-items-center profile-scholarship-title">
              Ramanujan Fellowship
            </div>
            <div className="col-1"></div>
            <div className="d-grid col-3">
              <button
                type="button"
                className="btn btn-warning"
                // onClick="/scholarship-details"
              >
                Pending 🕛
              </button>
            </div>
          </div>

          <div className="d-flex mx-5 py-2">
            <div className="col-8 px-3 py-2 d-flex align-items-center profile-scholarship-title">
              Aditya Birla Scholarship
            </div>
            <div className="col-1"></div>
            <div className="d-grid col-3">
              <button
                type="button"
                className="btn btn-warning"
                // onClick="/scholarship-details"
              >
                Pending 🕛
              </button>
            </div>
          </div>

          <div className="d-flex mx-5 py-2">
            <div className="col-8 px-3 py-2 d-flex align-items-center profile-scholarship-title">
              Digital Gujarat
            </div>
            <div className="col-1"></div>
            <div className="d-grid col-3">
              <button
                type="button"
                className="btn btn-success"
                // onClick="/scholarship-details"
              >
                Received ✅
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
