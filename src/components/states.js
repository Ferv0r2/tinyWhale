import { atom } from "recoil";

const scrollState = atom({
  key: "scrollState",
  default: "",
});

const scrollBtnState = atom({
  key: "scrollBtnState",
  default: 0,
});

const accountState = atom({
  key: "addressState",
  default: "",
});

const balanceState = atom({
  key: "balanceState",
  default: 0,
});

const networkState = atom({
  key: "networkState",
  default: "",
});

export {
  scrollState,
  scrollBtnState,
  accountState,
  balanceState,
  networkState,
};
