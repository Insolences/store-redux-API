import { USER_LOGIN, USER_LOG_OUT } from "../../Action";

const initState = {
  user: null
};

export function UserReducer(state = initState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };

    case USER_LOG_OUT:
      return { ...state, user: null };
  }

  return state;
}
