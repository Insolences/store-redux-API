import {
  CLEAR_ERROR_MESSAGE,
  SHOW_ERROR_MASSAGE,
  SHOW_NOTIFICATION
} from "../../Action";

const initState = {
  error: null,
  massage: null
};

export function NotificationReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_ERROR_MASSAGE: {
      return { ...state, error: action.payload };
    }

    case CLEAR_ERROR_MESSAGE: {
      return { ...state, error: null, message: null };
    }

    case SHOW_NOTIFICATION: {
      return { ...state, message: action.payload };
    }
  }

  return state;
}
