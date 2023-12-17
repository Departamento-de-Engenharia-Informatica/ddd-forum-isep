
import { UseCase } from "../../../../../shared/core/UseCase";
import { IMemberRepo } from "../../../repos/memberRepo";
import { Either, Result, left, right } from "../../../../../shared/core/Result";
import { AppError } from "../../../../../shared/core/AppError";
import { MemberDetails } from "../../../domain/memberDetails";
import { ICommentRepo } from "../../../repos/commentRepo";
import { IPostRepo } from "../../../repos/postRepo";
import { GetUserStatisticsWithBiggestScoreErrors } from "./GetUserStatisticsWithBiggestScoreErrors";
import { GetUserStatisticsByUserNameResponseDTO } from "../getUserStatisticsByUserName/GetUserStatisticsByUserNameResponseDTO";

type Response = Either<
  GetUserStatisticsWithBiggestScoreErrors.MemberNotFoundError |
  AppError.UnexpectedError,
  Result<GetUserStatisticsByUserNameResponseDTO>
>

export class GetUserStatisticsWithBiggestScore implements UseCase<void,Promise<Response>> {
  private memberRepo: IMemberRepo;
  private postRepo: IPostRepo;
  private commentRepo: ICommentRepo;

  constructor (memberRepo: IMemberRepo, postRepo: IPostRepo, commentRepo: ICommentRepo) {
    this.memberRepo = memberRepo;
    this.postRepo = postRepo;
    this.commentRepo = commentRepo;
  }

  public async execute (): Promise<Response> {
    let memberDetails: MemberDetails;
    let memberId: string;
    let username: string;
    let numberOfCommentedPosts: number;
    let numberOfPublishedPosts: number;

    try {

      try {
        console.log((await this.postRepo.getMemberWithMostPointsAndComments()));
        memberId = (await this.postRepo.getMemberWithMostPointsAndComments()).memberId;
        username = await this.memberRepo.getUsernameByMemberId(memberId);
        memberDetails = await this.memberRepo.getMemberDetailsByUserName(username);
        numberOfPublishedPosts = await this.postRepo.getNumberOfPostsByMemberId(memberId);
        numberOfCommentedPosts = await this.commentRepo.getNumberOfCommentsByMemberId(memberId);
      } catch (err) {
        return left(new GetUserStatisticsWithBiggestScoreErrors.MemberNotFoundError());
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