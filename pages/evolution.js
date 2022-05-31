import React, { useState, useEffect } from "react";
import Loading from "components/Loading";

import { useSetRecoilState, useRecoilValue } from "recoil";
import { bgState, accountState } from "components/states";

import useSWR from "swr";

const Evolution = () => {
  const setBg = useSetRecoilState(bgState);
  const account = useRecoilValue(accountState);
  const [isLoading, setLoading] = useState(true);

  // const { data, error } = useSWR('/api/user/123', fetcher)

  useEffect(() => {
    setBg("bg-black");
    setLoading(false);
  }, []);

  const setTotal = async () => {
    const baseURI = "https://api.kepler-452b.net/evol/";

    // GET DAILY EVOL
    const date = new Date();
    const dateY = new Date(Date.now() - 86400000);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    const monthY = ("0" + (dateY.getMonth() + 1)).slice(-2);
    const dayY = ("0" + dateY.getDate()).slice(-2);

    const today = `${year}-${month}-${day}`;
    const yesterday = `${year}-${monthY}-${dayY}`;

    let evol;
    try {
      const evolURI = baseURI + `${today}-daily`;
      evol = await fetch(evolURI).then((res) => res.json());
    } catch {
      const evolURI = baseURI + `${yesterday}-daily`;
      evol = await fetch(evolURI).then((res) => res.json());
    }

    setLoading(false);
  };

  if (isLoading) return <Loading />;

  return <div>evolution</div>;
};

export default Evolution;
