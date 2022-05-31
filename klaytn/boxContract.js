import Caver from "caver-js";
import boxABI from "abi/boxABI.json";

let boxContract;
if (typeof window !== "undefined") {
  const caver = new Caver(window.klaytn);
  boxContract = new caver.klay.Contract(boxABI, process.env.NEXT_PUBLIC_BOX_CA);
}

export default boxContract;
