import Api from "./api";

export const login = (credential) => {
  return Api().post("users/login.json", credential);
};

export const getMe = () => {
  return Api().get("users/me.json");
};

export const logout = () => {
  return Api().get("users/logout.json");
};

export const register = (credential) => {
  return Api().post("users/register.json", credential);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  login,
  getMe,
  logout,
  register,
};
