
import { UseCase } from "../../../../../shared/core/UseCase";
import { IMemberRepo } from "../../../repos/memberRepo";
import { GetUserStatisticsByUserNameDTO } from "./GetUserStatisticsByUserNameDTO";
import { Either, Result, left, right } from "../../../../../shared/core/Result";
import { AppError } from "../../../../../shared/core/AppError";
import { GetUserStatisticsByUserNameErrors } from "./GetUserStatisticsByUserNameErrors";
import { MemberDetails } from "../../../domain/memberDetails";
import { ICommentRepo } from "../../../repos/commentRepo";
import { IPostRepo } from "../../../repos/postRepo";
import { GetUserStatisticsByUserNameResponseDTO } from "./GetUserStatisticsByUserNameResponseDTO";

type Response = Either<
  GetUserStatisticsByUserNameErrors.MemberNotFoundError |
  AppError.UnexpectedError,
  Result<GetUserStatisticsByUserNameResponseDTO>
>

export class GetUserStatisticsByUserName implements UseCase<GetUserStatisticsByUserNameDTO, Promise<Response>> {
  private memberRepo: IMemberRepo;
  private postRepo: IPostRepo;
  private commentRepo: ICommentRepo;

  constructor (memberRepo: IMemberRepo, postRepo: IPostRepo, commentRepo: ICommentRepo) {
    this.memberRepo = memberRepo;
    this.postRepo = postRepo;
    this.commentRepo = commentRepo;
  }

  public async execute (request: GetUserStatisticsByUserNameDTO): Promise<Response> {
    let memberDetails: MemberDetails;
    let numberOfCommentedPosts: number;
    let numberOfPublishedPosts: number;
    let memberId: string;
    const { username } = request;

    try {

      try {
        memberDetails = await this.memberRepo.getMemberDetailsByUserName(username);
        memberId = (await this.memberRepo.getMemberByUserName(username)).id.toString();
        numberOfPublishedPosts = await this.postRepo.getNumberOfPostsByMemberId(memberId);
        numberOfCommentedPosts = await this.commentRepo.getNumberOfCommentsByMemberId(memberId);
      } catch (err) {
        return left(new GetUserStatisticsByUserNameErrors.MemberNotFoundError(username));
      }

      return right(Result.ok<GetUserStatisticsByUserNameResponseDTO>({
        username: memberDetails.username.value,
        reputation: memberDetails.reputation,
        numberOfPublishedPosts: numberOfPublishedPosts,
        numberOfCommentedPosts: numberOfCommentedPosts
      }))

    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}