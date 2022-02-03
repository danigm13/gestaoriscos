export const Types = {
  HANDLE_APP: "app/HANDLE_APP",
  CURRENT_TAB: "app/CURRENT_TAB",
  PERSISTED_USER: "app/PERSISTED_USER",
  PLACE_HISTORIC: "app/PLACE_HISTORIC",
  LOGOFF_USER: "app/LOGOFF_USER",
  CHANGE_MAP_CONFIG: "app/CHANGE_MAP_CONFIG",
  FIRST_TIME: "FIRST_TIME",
};

// Reducers

const INITIAL_STATE = {
  first_time: true,
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FIRST_TIME:
      return {
        ...state,
        first_time: action.value,
      };
    default:
      return state;
  }
};

// Actions

export const setFirstTimeApp = () => {
  return async (dispatch) => {
    dispatch({
      type: Types.FIRST_TIME,
      value: false,
    });
  };
};
