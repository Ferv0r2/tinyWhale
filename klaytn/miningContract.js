import Caver from "caver-js";
import miningABI from "abi/miningABI.json";

let miningContract;
if (typeof window !== "undefined") {
  const caver = new Caver(window.klaytn);
  miningContract = new caver.klay.Contract(
    miningABI,
    process.env.NEXT_PUBLIC_MINING_CA
  );
}

export default miningContract;
