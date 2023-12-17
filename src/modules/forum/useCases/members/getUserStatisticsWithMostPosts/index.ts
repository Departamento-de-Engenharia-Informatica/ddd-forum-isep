
import { memberRepo } from "../../../repos";
import { postRepo } from "../../../repos";
import { commentRepo } from "../../../repos";
import { GetUserStatisticsWithMostPosts } from "./GetUserStatisticsWithMostPosts";
import { GetUserStatisticsWithMostPostsController } from "./GetUserStatisticsWithMostPostsController";

const getUserStatisticsWithMostPosts = new GetUserStatisticsWithMostPosts(
  memberRepo,
  postRepo,
  commentRepo,
)

const getUserStatisticsWithMostPostsController = new GetUserStatisticsWithMostPostsController(
  getUserStatisticsWithMostPosts
)

export { 
  getUserStatisticsWithMostPosts,
  getUserStatisticsWithMostPostsController
}
