import * as actionTypes from "../actionTypes";

const initialState = {
  loading: false,
  matchNames: [],
  error: null,
};

export const matchNameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.MATCH_NAME_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.MATCH_NAME_SUCCESS:
      return {
        loading: false,
        matchNames: payload,
      };
    case actionTypes.MATCH_NAME_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
