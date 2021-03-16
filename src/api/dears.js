import Api from "./api";

export const store = (dear) => {
  return Api().post("dears/store.json", dear);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  store,
};
