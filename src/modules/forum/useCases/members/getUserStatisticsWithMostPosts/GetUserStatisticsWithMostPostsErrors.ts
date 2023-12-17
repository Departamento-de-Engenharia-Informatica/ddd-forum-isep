import { UseCaseError } from "../../../../../shared/core/UseCaseError";
import { Result } from "../../../../../shared/core/Result";

export namespace GetUserStatisticsWithMostPostsErrors {

  export class MemberNotFoundError extends Result<UseCaseError> {
    constructor () {
      super(false, {
        message: `Couldn't find a member with most posts`
      } as UseCaseError)
    }
  }

}