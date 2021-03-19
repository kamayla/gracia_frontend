import Api from "./api";

export const store = (anniversary) => {
  return Api().post("anniversaries/store.json", anniversary);
};
export const edit = (anniversaryId, anniversary) => {
  return Api().put(`anniversaries/edit/${anniversaryId}.json`, anniversary);
};
export const del = (anniversaryId) => {
  return Api().delete(`anniversaries/delete/${anniversaryId}.json`);
};
export const listByDearId = (anniversaryId) => {
  return Api().get(`anniversaries/listByDearId/${anniversaryId}.json`);
};
export const listSortByMonth = () => {
  return Api().get(`anniversaries/listSortByMonth.json`);
};


/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  store,
  edit,
  del,
  listByDearId,
  listSortByMonth,
};
