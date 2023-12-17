
import { memberRepo } from "../../../repos";
import { postRepo } from "../../../repos";
import { commentRepo } from "../../../repos";
import { GetUserStatisticsWithBiggestScore } from "./GetUserStatisticsWithBiggestScore";
import { GetUserStatisticsWithBiggestScoreController } from "./GetUserStatisticsWithBiggestScoreController";

const getUserStatisticsWithBiggestScore = new GetUserStatisticsWithBiggestScore(
  memberRepo,
  postRepo,
  commentRepo,
)

const getUserStatisticsWithBiggestScoreController = new GetUserStatisticsWithBiggestScoreController(
  getUserStatisticsWithBiggestScore
)

export { 
  getUserStatisticsWithBiggestScore,
  getUserStatisticsWithBiggestScoreController
}
