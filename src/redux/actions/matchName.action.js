
import * as actionTypes from "../actionTypes";
import axios from "axios";

export const getMatchNames = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.MATCH_NAME_REQUEST,
    });

    const { data } = await axios.get(
      "https://tanvir-live-score-default-rtdb.firebaseio.com/matchName.json"
    );
    const { matchName } = data;

    dispatch({
      type: actionTypes.MATCH_NAME_SUCCESS,
      payload: matchName,
    });
  } catch ({ message }) {
    console.error(message);
    dispatch({
      type: actionTypes.MATCH_NAME_FAIL,

      payload: message,
    });
  }
};
