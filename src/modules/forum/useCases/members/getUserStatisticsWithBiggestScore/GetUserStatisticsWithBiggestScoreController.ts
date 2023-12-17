
import { GetUserStatisticsWithBiggestScore } from "./GetUserStatisticsWithBiggestScore";
import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { GetUserStatisticsWithBiggestScoreErrors } from "./GetUserStatisticsWithBiggestScoreErrors";
import { MemberDetailsMap } from "../../../mappers/memberDetailsMap";
import * as express from 'express'
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";
import { GetUserStatisticsByUserNameResponseDTO } from "../getUserStatisticsByUserName/GetUserStatisticsByUserNameResponseDTO";

export class GetUserStatisticsWithBiggestScoreController extends BaseController {
  private useCase: GetUserStatisticsWithBiggestScore;

  constructor (useCase: GetUserStatisticsWithBiggestScore) {
    super();
    this.useCase = useCase;
  }

  async executeImpl (req: DecodedExpressRequest, res: express.Response): Promise<any> {

    try {
      const result = await this.useCase.execute();

      if (result.isLeft()) {
        const error = result.value;
  
        switch (error.constructor) {
          case GetUserStatisticsWithBiggestScoreErrors.MemberNotFoundError:
            return this.notFound(res, error.getErrorValue().message)
          default:
            return this.fail(res, error.getErrorValue().message);
        }
        
      } else {
        const memberDetails = result.value.getValue();

        return this.ok<GetUserStatisticsByUserNameResponseDTO>(res,memberDetails);
      }

    } catch (err) {
      return this.fail(res, err)
    }
  }
}