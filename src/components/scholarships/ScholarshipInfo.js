import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/scholarships/ScholarshipInfo.css";
import PolygonIDVerifier from "../polygonId/PolygonIDVerifier";

function ScholarshipInfo() {
  const navigate = useNavigate();
  const [provedAccessBirthday, setProvedAccessBirthday] = useState(false);
  return (
    <div className="col-11 mx-auto">
      <div
        className="scholarship-title my-auto"
        style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}
      >
        <span className="scholarshipTitleBox">DAAD Scholarship Germany</span>
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
              1. What is DAAD Scholarship Germany?
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
              DAAD scholarships are open to students seeking a degree in engineering or science who want to complete their three-month internship program at a public German institution. Undergraduate students who are chosen will get 861 EUR per month to cover living expenses, as well as 1,050 EUR in travel aid and payments for health, accident, and personal liability insurance.
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
              2. What are the benefits of DAAD Scholarship?
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
              <li>Covers participation costs</li>
              <li>Contribute to travel, German student visa and a living allowance</li>
              <li>Can be applied directly to the institution running their chosen program</li>
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
              3. What is the eligibility criteria to apply for the scholarship?
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
             <li> Possess a bachelor's degree (first degree), be in his final year of undergraduate study, or have already graduated before the start of the master's program in Germany.</li>
             <li>He must have scored 70% or more in Batchelor's.</li>
            <li>He may also apply If he can prove that he has the learning capacity of a bachelor.</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scholarship-title my-auto"
        style={{ paddingTop: "2rem", paddingBottom: "1.5rem" }}
      >
        <span className="scholarshipTitleBox" style={{fontSize:"1.5rem"}}>Verify the Documents and Apply for Scholarship</span>
      </div>
      <div style={{textAlign:"left"}}>
        <div className="py-3 d-flex" style={{alignItems:"center"}}>
          <div className="" style={{fontWeight:"650", fontSize:"1.5rem"}}> Verify Graduation Percentage:</div>

          <PolygonIDVerifier
                  publicServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_PUBLIC_URL
                  }
                  localServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL
                  }
                  // credentialType={"KYCAgeCredential"}
                  issuerOrHowToLink={
                    "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                  }
                  onVerificationResult={(result) => {
                    setProvedAccessBirthday(result);
                    if (result) {
                      navigate("/profile"); 
                    }
                  }}
                />
          <div className="d-flex py-2" style={{ fontWeight: "600" }}>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipInfo;
