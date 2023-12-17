
import * as actions from "./actions";
import { User } from "../models/user";
import { UserStatsDTO } from "../dtos/userStatsDTO";

export type UsersAction = { [key: string]: actions.UsersActionType | any };

function gettingUserProfile (): UsersAction {
  return {
    type: actions.GETTING_USER_PROFILE
  };
}

function gettingUserProfileSuccess (user: User): UsersAction & { user: User } {
  return {
    type: actions.GETTING_USER_PROFILE_SUCCESS,
    user
  };
}

function gettingUserProfileFailure (errorMessage: string): UsersAction & { errorMessage: string } {
  return {
    type: actions.GETTING_USER_PROFILE_FAILURE,
    errorMessage
  };
}

function gettingUserStatistics (): UsersAction {
  return {
    type: actions.GETTING_USER_STATISTICS
  };
}

function gettingUserStatisticsSuccess (userStats: UserStatsDTO): UsersAction & { userStats: UserStatsDTO } {
  return {
    type: actions.GETTING_USER_STATISTICS_SUCCESS,
    userStats
  };
}

function gettingUserStatisticsFailure (errorMessage: string): UsersAction & { errorMessage: string } {
  return {
    type: actions.GETTING_USER_STATISTICS_FAILURE,
    errorMessage
  };
}

function gettingUserStatisticsWithBestScore (): UsersAction {
  return {
    type: actions.GETTING_USER_STATISTICS_WITH_BEST_SCORE
  };
}

function gettingUserStatisticsWithBestScoreSuccess (userStatsWithBestScore: UserStatsDTO): UsersAction & { userStatsWithBestScore: UserStatsDTO } {
  return {
    type: actions.GETTING_USER_STATISTICS_WITH_BEST_SCORE_SUCCESS,
    userStatsWithBestScore
  };
}

function gettingUserStatisticsWithBestScoreFailure (errorMessage: string): UsersAction & { errorMessage: string } {
  return {
    type: actions.GETTING_USER_STATISTICS_WITH_BEST_SCORE_FAILURE,
    errorMessage
  };
}

function gettingUserStatisticsWithMostPosts (): UsersAction {
  return {
    type: actions.GETTING_USER_STATISTICS_WITH_MOST_POSTS
  };
}

function gettingUserStatisticsWithMostPostsSuccess (userStatsWithMostPosts: UserStatsDTO): UsersAction & { userStatsWithMostPosts: UserStatsDTO } {
  return {
    type: actions.GETTING_USER_STATISTICS_WITH_MOST_POSTS_SUCCESS,
    userStatsWithMostPosts
  };
}

function gettingUserStatisticsWithMostPostsFailure (errorMessage: string): UsersAction & { errorMessage: string } {
  return {
    type: actions.GETTING_USER_STATISTICS_WITH_MOST_POSTS_FAILURE,
    errorMessage
  };
}

function loggingIn (): UsersAction {
  return {
    type: actions.LOGGING_IN
  };
}

function loggingInSuccess (): UsersAction {
  return {
    type: actions.LOGGING_IN_SUCCESS
  };
}

function loggingInFailure (error: string): UsersAction {
  return {
    type: actions.LOGGING_IN_FAILURE,
    error
  };
}

function loggingOut (): UsersAction {
  return {
    type: actions.LOGGING_OUT
  };
}

function loggingOutSuccess (): UsersAction {
  return {
    type: actions.LOGGING_OUT_SUCCESS
  };
}

function loggingOutFailure (error: string): UsersAction {
  return {
    type: actions.LOGGING_OUT_FAILURE,
    error
  };
}

function creatingUser (): UsersAction {
  return {
    type: actions.CREATING_USER
  };
}

function creatingUserSuccess (): UsersAction {
  return {
    type: actions.CREATING_USER_SUCCESS
  };
}

function creatingUserFailure (error: string): UsersAction {
  return {
    type: actions.CREATING_USER_FAILURE,
    error
  };
}

export {
  gettingUserProfile,
  gettingUserProfileSuccess,
  gettingUserProfileFailure,

  gettingUserStatistics,
  gettingUserStatisticsSuccess,
  gettingUserStatisticsFailure,

  gettingUserStatisticsWithMostPosts,
  gettingUserStatisticsWithMostPostsSuccess,
  gettingUserStatisticsWithMostPostsFailure,

  gettingUserStatisticsWithBestScore,
  gettingUserStatisticsWithBestScoreSuccess,
  gettingUserStatisticsWithBestScoreFailure,

  loggingIn,
  loggingInSuccess,
  loggingInFailure,

  loggingOut,
  loggingOutSuccess,
  loggingOutFailure,

  creatingUser,
  creatingUserSuccess,
  creatingUserFailure
}

const getActionCreators = () => ({
  gettingUserProfile,
  gettingUserProfileSuccess,
  gettingUserProfileFailure,

  gettingUserStatistics,
  gettingUserStatisticsSuccess,
  gettingUserStatisticsFailure,

  gettingUserStatisticsWithMostPosts,
  gettingUserStatisticsWithMostPostsSuccess,
  gettingUserStatisticsWithMostPostsFailure,

  gettingUserStatisticsWithBestScore,
  gettingUserStatisticsWithBestScoreSuccess,
  gettingUserStatisticsWithBestScoreFailure,

  loggingIn,
  loggingInSuccess,
  loggingInFailure,

  loggingOut,
  loggingOutSuccess,
  loggingOutFailure,

  creatingUser,
  creatingUserSuccess,
  creatingUserFailure
});

export default getActionCreators;