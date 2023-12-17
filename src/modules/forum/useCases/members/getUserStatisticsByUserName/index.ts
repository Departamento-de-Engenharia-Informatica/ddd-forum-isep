
import { GetUserStatisticsByUserName } from "./GetUserStatisticsByUserName";
import { memberRepo } from "../../../repos";
import { postRepo } from "../../../repos";
import { commentRepo } from "../../../repos";
import { GetUserStatisticsByUserNameController } from "./GetUserStatisticsByUserNameController";

const getUserStatisticsByUserName = new GetUserStatisticsByUserName(
  memberRepo,
  postRepo,
  commentRepo
)

const getUserStatisticsByUserNameController = new GetUserStatisticsByUserNameController(
  getUserStatisticsByUserName
)

export { 
  getUserStatisticsByUserName,
  getUserStatisticsByUserNameController
}
