import { ethers } from "ethers";
import scholarIdABI from "../contracts/artifacts/ScholarIdABI.json";

export const CONTRACT_ADDRESS = "0x502aC23516A732741d4756ABA4e4abd2d3E1507D";

export const  contractInstance = async () => {
  const { ethereum } = window;
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    if (!provider) {
      console.log("Metamask is not installed, please install!");
    }
    const con = new ethers.Contract(CONTRACT_ADDRESS, scholarIdABI , signer);
    // console.log(con);
    return con;
  } else {
    console.log("error");
  }
};
