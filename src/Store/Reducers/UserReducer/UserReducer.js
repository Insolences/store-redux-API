import { USER_LOGIN, USER_LOG_OUT } from "../../Action";
import { initState } from "../../InitState";

export function UserReducer(state = initState.user, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };

    case USER_LOG_OUT:
      return { ...state, user: null };

    // case GET_COMMENTS_LIST: {
    //   const { pageNumber, totalPages, commentSize } = action.payload;
    //   return {
    //     ...state,
    //     pages: totalPages,
    //     pageNumber: pageNumber,
    //     commentSize: commentSize
    //   };
    // }
  }

  return state;
}
