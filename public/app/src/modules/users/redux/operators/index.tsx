
import { getUserProfile } from "./getUserProfile";
import { login } from "./login";
import { logout } from "./logout";
import { createUser } from "./createUser";
import { getUserStatistics } from "./getUserStatistics";
import { getUserStatisticsWithBestScore } from "./getUserStatisticsWithBestScore";
import { getUserStatisticsWithMostPosts } from "./getUserStatisticsWithMostPosts";

export interface IUserOperators {
  getUserProfile (): void;
  login (username: string, password: string): void;
  logout (): void;
  createUser (email: string, username: string, password: string): void;
  getUserStatistics (username: string): void;
  getUserStatisticsWithBestScore(): void;
  getUserStatisticsWithMostPosts(): void;
}

export {
  getUserProfile,
  login,
  logout,
  createUser,
  getUserStatistics,
  getUserStatisticsWithBestScore,
  getUserStatisticsWithMostPosts
}

const getOperators = () => ({
  getUserProfile,
  login,
  logout,
  createUser,
  getUserStatistics,
  getUserStatisticsWithBestScore,
  getUserStatisticsWithMostPosts
});

export default getOperators;