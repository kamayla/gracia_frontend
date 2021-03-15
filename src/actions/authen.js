import Api from "../api/authen";

export const setCurrentUser = () => {
  return async (dispatch) => {
    await Api.getMe().then((res) => {
      console.log(res.data);
      const currentUser = res.data;
      dispatch({ type: "SET_CURRENT_USER", payload: { currentUser } });
    });
  };
};
