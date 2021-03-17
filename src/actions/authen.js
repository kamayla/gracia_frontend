import Api from "../api/authen";

export const setCurrentUser = () => {
  return async (dispatch) => {
    await Api.getMe().then((res) => {
      const currentUser = res.data;
      dispatch({ type: "SET_CURRENT_USER", payload: { currentUser } });
    });
  };
};
