import { USER_LOGIN, USER_LOG_OUT } from "../../Action";
import { initState } from "../../InitState";

export function PaginationReducer(state = initState.pagination, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };

    case USER_LOG_OUT:
      return { ...state, user: null };
  }

  return state;
}
