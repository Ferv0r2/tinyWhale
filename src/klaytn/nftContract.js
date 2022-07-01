import Caver from "caver-js";
import nftABI from "abi/nftABI.json";

let keplerContract;
if (typeof window !== "undefined") {
  const caver = new Caver(window.klaytn);
  keplerContract = new caver.klay.Contract(
    nftABI,
    process.env.NEXT_PUBLIC_NFT_CA
  );
}

export default keplerContract;
