import React, { useState } from "react";
import "../../styles/dashboard/ScholarshipApplicants.css";
import { contractInstance } from "../Contract";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

function ScholarshipApplicants() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState();

  const executePayout = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await contractInstance();
        console.log("Amount", amount);

        const recipientsArray = [
          "0x6e2ae46509297aB25344F50504D5Ae50fBBB4292",
          "0x5719413E4Dc736Dd60D73cb8B5734F19a96535ae",
        ];

        const amountInWei = ethers.utils.parseEther(amount);

        console.log("Amount in Wei: ", amountInWei, {
          value: amount * recipientsArray.length,
        });

        const tx = await con.disperse(recipientsArray, amountInWei.toString(), {
          value: (amountInWei * recipientsArray.length).toString(),
        });
        console.log();

        console.log(tx);
        await tx.wait();
      }
    } catch (e) {
      console.log("Error in creating user account: ", e);
    }
  };

  return (
    <div className="py-3 col-10 mx-auto">
      <div className="d-flex py-3 applicants-components my-4">
        <div className="d-flex align-items-center ps-4 col-7 applicant-component-title">
          Scholarship Name
        </div>
        <div className="col-5">
          <input
            type="text"
            className="mx-2"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          ></input>
          <button
            type="button"
            className="btn btn-primary"
            style={{ fontSize: "1.2rem", fontWeight: "600" }}
            onClick={executePayout}
          >
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
