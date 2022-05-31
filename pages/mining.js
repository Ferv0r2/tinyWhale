import React, { useState, useEffect } from "react";
import Loading from "components/Loading";

import { useSetRecoilState, useRecoilValue } from "recoil";
import { bgState, accountState } from "components/states";
import MiningSlider from "components/MiningSlider";

const Mining = () => {
  const setBg = useSetRecoilState(bgState);
  const account = useRecoilValue(accountState);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setBg("bg-miningBg");
  }, []);

  // if (isLoading) return <Loading />;

  return (
    <div className="max-w-4xl m-auto min-h-screen text-slate-50 text-center font-[GmarketSansMedium]">
      <img className="w-10/12 m-auto" src="images/mining/mining_banner.png" />
      <img className="w-8/12 -mt-5 m-auto" src="video/mining.png" />
      <div className="py-8 w-48 m-auto">
        <div className="rounded-2xl py-3 text-lg font-[GmarketSansBold] cursor-pointer  bg-miningBtnBg hover:bg-miningBtnHover">
          START
        </div>
      </div>
      <p className="text-sm">
        아래에 가지고 있는 곡괭이를 선택 후 "START" 버튼을 눌러 믹스스톤을
        채굴해주세요
      </p>
      <MiningSlider />
      <p className="py-5">남은 수량 : 0개</p>
    </div>
  );
};

export default Mining;
