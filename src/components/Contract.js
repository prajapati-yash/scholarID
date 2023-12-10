import { ethers } from "ethers";
import scholarIdABI from "../contracts/artifacts/ScholarIdABI.json";

export const CONTRACT_ADDRESS = "0x4DD52DFF6231ccb21e4CFa89f149524FDb5b9c36";

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
