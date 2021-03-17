import Api from "./api";

export const store = (dear) => {
  return Api().post("dears/store.json", dear);
};

export const list = (page = 1) => {
  return Api().get(`dears/list.json?page=${page}`)
}

export const edit = (dear, dearId) => {
  return Api().put(`dears/edit/${dearId}.json`, dear)
}

export const del = (dearId) => {
  return Api().delete(`dears/delete/${dearId}.json`)
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  store,
  list,
  edit,
  del,
};
