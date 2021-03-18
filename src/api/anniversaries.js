import Api from "./api";

export const store = (anniversary) => {
  return Api().post("anniversaries/store.json", anniversary);
};
export const listByDearId = (anniversaryId) => {
  return Api().get(`anniversaries/listByDearId/${anniversaryId}.json`);
};


/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  store,
  listByDearId,
};
