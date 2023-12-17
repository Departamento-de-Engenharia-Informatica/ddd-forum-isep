
import { UserStatsDTO } from "../dtos/userStatsDTO";
import { User } from "../models/user";
import { UserStats } from "../models/userStats";

export interface UsersState {
  user: User | {};
  userStats: UserStatsDTO | {};
  userStatsWithBestScore: UserStatsDTO | {};
  userStatsWithMostPosts: UserStatsDTO | {};
  isFetchingUserStats: boolean;
  isFetchingUserStatsSuccess: boolean;
  isFetchingUserStatsFailure: boolean;

  isFetchingUserStatsWithBestScore: boolean;
  isFetchingUserStatsWithBestScoreSuccess: boolean;
  isFetchingUserStatsWithBestScoreFailure: boolean;

  isFetchingUserStatsWithMostPosts: boolean;
  isFetchingUserStatsWithMostPostsSuccess: boolean;
  isFetchingUserStatsWithMostPostsFailure: boolean;

  isAuthenticated: boolean;
  isFetchingUser: boolean;
  isFetchingUserSuccess: boolean;
  isFetchingUserFailure: boolean;

  isLoggingIn: boolean,
  isLoggingInSuccess: boolean,
  isLoggingInFailure: boolean,

  isLoggingOut: boolean;
  isLoggingOutSuccess: boolean;
  isLoggingOutFailure: boolean;

  isCreatingUser: boolean;
  isCreatingUserSuccess: boolean;
  isCreatingUserFailure: boolean;

  error: string;
}

const initialUserState: UsersState = {
  user: {},
  userStats: {},
  userStatsWithBestScore: {},
  userStatsWithMostPosts: {},
  isAuthenticated: false,
  isFetchingUser: false,
  isFetchingUserSuccess: false,
  isFetchingUserFailure: false,

  isFetchingUserStats: false,
  isFetchingUserStatsSuccess: false,
  isFetchingUserStatsFailure: false,

  isFetchingUserStatsWithBestScore: false,
  isFetchingUserStatsWithBestScoreSuccess: false,
  isFetchingUserStatsWithBestScoreFailure: false,

  isFetchingUserStatsWithMostPosts: false,
  isFetchingUserStatsWithMostPostsSuccess: false,
  isFetchingUserStatsWithMostPostsFailure: false,

  isLoggingIn: false,
  isLoggingInSuccess: false,
  isLoggingInFailure: false,

  isLoggingOut: false,
  isLoggingOutSuccess: false,
  isLoggingOutFailure: false,

  isCreatingUser: false,
  isCreatingUserSuccess: false,
  isCreatingUserFailure: false,

  error: ''
}

export default initialUserState;
