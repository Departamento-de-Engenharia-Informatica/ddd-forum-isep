
import { GetUserStatisticsByUserName } from "./GetUserStatisticsByUserName";
import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { GetUserStatisticsByUserNameDTO } from "./GetUserStatisticsByUserNameDTO";
import { GetUserStatisticsByUserNameErrors } from "./GetUserStatisticsByUserNameErrors";
import { GetUserStatisticsByUserNameResponseDTO } from "./GetUserStatisticsByUserNameResponseDTO";
import { MemberDetailsMap } from "../../../mappers/memberDetailsMap";
import * as express from 'express'
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";

export class GetUserStatisticsByUserNameController extends BaseController {
  private useCase: GetUserStatisticsByUserName;

  constructor (useCase: GetUserStatisticsByUserName) {
    super();
    this.useCase = useCase;
  }

  async executeImpl (req: DecodedExpressRequest, res: express.Response): Promise<any> {
    const dto: GetUserStatisticsByUserNameDTO = {
      username: req.params.username
    }

    try {
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;
  
        switch (error.constructor) {
          case GetUserStatisticsByUserNameErrors.MemberNotFoundError:
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