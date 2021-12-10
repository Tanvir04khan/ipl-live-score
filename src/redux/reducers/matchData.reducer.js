import * as actionTypes from "../actionTypes";

const initialState = {
  loading: false,
  matchData: {},
  error: null,
};

export const matchDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.MATCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.MATCH_DATA_SUCCESS:
      return {
        ...state,
        matchData: payload,
        loading: false,
      };
    case actionTypes.MATCH_DATA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
