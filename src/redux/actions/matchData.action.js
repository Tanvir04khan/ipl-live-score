import axios from "axios";
import * as actionTypes from "../actionTypes";

export const getMatchData = (matchName) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.MATCH_DATA_REQUEST,
    });

    const { data } = await axios.get(
      `https://tanvir-live-score-default-rtdb.firebaseio.com/${matchName}.json`
    );

    dispatch({
      type: actionTypes.MATCH_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.MATCH_DATA_FAIL,
      payload: error.message,
    });
  }
};
