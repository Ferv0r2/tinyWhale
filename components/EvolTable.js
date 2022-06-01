import React from "react";
import NFTBox from "components/NFTBox";

const EvolTable = ({ name, info, tokenData }) => {
  const data = tokenData.map((data) => {
    <li key={data.key}>
      <NFTBox tokenId={data.key} tokenURI={data.value} />
    </li>;
  });

  return (
    <div className="EvolTable">
      <div className="EvolTable__infoBox">
        <h2>
          {name} ({tokenData.size})
        </h2>
        <ul>{tokenData.size != 0 ? { data } : <h2>{info}</h2>}</ul>
      </div>
    </div>
  );
};

export default EvolTable;
