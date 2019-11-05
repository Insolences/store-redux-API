import {
  CLEAR_ERROR_MESSAGE,
  SHOW_ERROR_MASSAGE,
  SHOW_NOTIFICATION
} from "../../Action";
import { initState } from "../../InitState";

export function NotificationReducer(state = initState.notification, action) {
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
