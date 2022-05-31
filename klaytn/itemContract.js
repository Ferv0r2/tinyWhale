import Caver from "caver-js";
import itemABI from "abi/itemABI.json";

let itemContract;
if (typeof window !== "undefined") {
  const caver = new Caver(window.klaytn);
  itemContract = new caver.klay.Contract(
    itemABI,
    process.env.NEXT_PUBLIC_ITEM_CA
  );
}

export default itemContract;
