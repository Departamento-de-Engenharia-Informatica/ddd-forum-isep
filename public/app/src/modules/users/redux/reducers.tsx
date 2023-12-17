
import states, { UsersState } from "./states";
import * as actions from "./actions";

import { UsersAction } from "./actionCreators";
import { ReduxUtils } from "../../../shared/utils/ReduxUtils";

export default function users(state: UsersState = states,
  action: UsersAction
): UsersState {
  switch (action.type as actions.UsersActionType) {
    case actions.GETTING_USER_PROFILE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUser")
      };
    case actions.GETTING_USER_PROFILE_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUser", true),
        user: action.user,
        isAuthenticated: true
      };
    case actions.GETTING_USER_PROFILE_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUser", false)
      };

    case actions.GETTING_USER_STATISTICS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStats"),
        error: ''
      };
    case actions.GETTING_USER_STATISTICS_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStats", true),
        userStats: action.userStats
      };
    case actions.GETTING_USER_STATISTICS_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStats", false),
        error: action.error
      };

    case actions.GETTING_USER_STATISTICS_WITH_BEST_SCORE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStatsWithBestScore"),
        error: ''
      };
    case actions.GETTING_USER_STATISTICS_WITH_BEST_SCORE_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStatsWithBestScore", true),
        userStatsWithBestScore: action.userStatsWithBestScore
      };
    case actions.GETTING_USER_STATISTICS_WITH_BEST_SCORE_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStatsWithBestScore", false),
        error: action.error
      };

    case actions.GETTING_USER_STATISTICS_WITH_MOST_POSTS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStatsWithMostPosts"),
        error: ''
      };
    case actions.GETTING_USER_STATISTICS_WITH_MOST_POSTS_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStatsWithMostPosts", true),
        userStatsWithMostPosts: action.userStatsWithMostPosts
      };
    case actions.GETTING_USER_STATISTICS_WITH_MOST_POSTS_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFetchingUserStatsWithMostPosts", false),
        error: action.error
      };

    case actions.LOGGING_IN:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isLoggingIn'),
        error: '',
      }
    case actions.LOGGING_IN_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isLoggingIn', true),
        isAuthenticated: true
      }
    case actions.LOGGING_IN_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isLoggingIn', false),
        error: action.error
      }

    case actions.LOGGING_OUT:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isLoggingOut'),
        error: '',
      }
    case actions.LOGGING_OUT_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isLoggingOut', true),
        isAuthenticated: false
      }
    case actions.LOGGING_OUT_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isLoggingOut', false),
        error: action.error
      }

    case actions.CREATING_USER:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isCreatingUser'),
        error: action.error
      }
    case actions.CREATING_USER_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isCreatingUser', true),
      }
    case actions.CREATING_USER_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isCreatingUser', false),
        error: action.error
      }
    default:
      return state;
  }
}