import { atom } from "recoil";

const bgState = atom({
  key: "bgState",
  default: "bg-main",
});

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

const boxIdState = atom({
  key: "boxIdState",
  default: 0,
});

export {
  bgState,
  scrollState,
  scrollBtnState,
  accountState,
  balanceState,
  networkState,
  boxIdState,
};
