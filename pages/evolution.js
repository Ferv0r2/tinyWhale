import React, { useState, useEffect } from "react";
import keplerContract from "klaytn/keplerContract";
import Loading from "components/Loading";
import mix from "data/mix.json";
import emit from "data/evol.json";

import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import {
  bgState,
  accountState,
  evolState,
  mixTotalState,
  mixEvolState,
  spawnedState,
  evoledState,
} from "components/states";

import useSWR from "swr";

const Evolution = () => {
  const setBg = useSetRecoilState(bgState);
  const setEvoled = useSetRecoilState(evoledState);
  const setSpawned = useSetRecoilState(spawnedState);
  const setMix = useSetRecoilState(mixTotalState);
  const setMixEvol = useSetRecoilState(mixEvolState);
  const account = useRecoilValue(accountState);
  const [evol, setEvol] = useRecoilState(evolState);
  const [isLoading, setLoading] = useState(true);

  // const { data, error } = useSWR('/api/user/123', fetcher)

  useEffect(() => {
    setBg("bg-black");
    setTotal();
    setLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      setOwner();
    }, 3000);
  });

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

    let getEvol;
    try {
      const evolURI = baseURI + `${today}-daily`;
      getEvol = await fetch(evolURI).then((res) => res.json());
    } catch {
      const evolURI = baseURI + `${yesterday}-daily`;
      getEvol = await fetch(evolURI).then((res) => res.json());
    }

    setEvol(emit);
    setLoading(false);
  };

  const setOwner = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;
    if (account === "") return;
    if (evol === {}) return;

    const len = await keplerContract.methods.balanceOf(account).call();

    const promises = [];

    let evoled = new Map();
    let spawned = new Map();
    let mixTotal = new Map();
    let mixEvol = new Map();

    for (let id = 0; id < len; id++) {
      const promise = async (index) => {
        let tokenId = await keplerContract.methods
          .tokenOfOwnerByIndex(account, index)
          .call();

        if (evol["token"].includes(parseInt(tokenId))) {
          const url = await keplerContract.methods.tokenURI(tokenId).call();
          const response = await fetch(url).then((res) => res.json());

          evoled.set(tokenId, response.image);
        }

        if (evol["spawning"].includes(parseInt(tokenId))) {
          const url = await keplerContract.methods.tokenURI(tokenId).call();
          const response = await fetch(url).then((res) => res.json());

          spawned.set(tokenId, response.image);
        }

        if (
          mix["mix"].includes(parseInt(tokenId)) ||
          mix["hmix"].includes(parseInt(tokenId))
        ) {
          const url = await keplerContract.methods.tokenURI(tokenId).call();
          const response = await fetch(url).then((res) => res.json());

          mixTotal.set(tokenId, response.image);

          if (evol["token"].includes(parseInt(tokenId))) {
            const url = await keplerContract.methods.tokenURI(tokenId).call();
            const response = await fetch(url).then((res) => res.json());

            mixEvol.set(tokenId, response.image);
          }
        }
      };

      promises.push(promise(id));
    }

    await Promise.all(promises);

    const evoledASC = new Map([...evoled.entries()].sort((a, b) => a - b));
    const spawnedASC = new Map([...spawned.entries()].sort((a, b) => a - b));
    const mixTotalASC = new Map([...mixTotal.entries()].sort((a, b) => a - b));
    const mixEvolASC = new Map([...mixEvol.entries()].sort((a, b) => a - b));

    setEvoled(evoledASC);
    setSpawned(spawnedASC);
    setMix(mixTotalASC);
    setMixEvol(mixEvolASC);
  };

  if (isLoading) return <Loading />;

  return <div className="min-v-screen">evolution</div>;
};

export default Evolution;
