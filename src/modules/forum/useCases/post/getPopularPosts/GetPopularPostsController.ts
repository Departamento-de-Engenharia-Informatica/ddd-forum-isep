
import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { GetPopularPostsRequestDTO } from "./GetPopularPostsRequestDTO";
import { GetPopularPosts } from "./GetPopularPosts";
import { GetPopularPostsResponseDTO } from "./GetPopularPostsResponseDTO";
import { PostDetailsMap } from "../../../mappers/postDetailsMap";
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";
import * as express from 'express'

/**
 * Controller for handling the retrieval of popular posts.
 */
export class GetPopularPostsController extends BaseController {
  private useCase: GetPopularPosts;

  /**
   * Constructor for the GetPopularPostsController.
   *
   * @param {GetPopularPosts} useCase - The use case for retrieving popular posts.
   */
  constructor (useCase: GetPopularPosts) {
    super();
    this.useCase = useCase;
  }

  /**
   * Executes the controller logic to retrieve popular posts.
   *
   * @param {DecodedExpressRequest} req - The request object.
   * @param {express.Response} res - The response object.
   * @returns {Promise<any>} A promise representing the response.
   */
  async executeImpl (req: DecodedExpressRequest, res: express.Response): Promise<any> {

    const dto: GetPopularPostsRequestDTO = {
      offset: parseInt(req.query.offset as string, 10),
      userId: !!req.decoded === true ? req.decoded.userId : null
    }

    try {
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;
  
        switch (error.constructor) {
          default:
            return this.fail(res, error.getErrorValue().message);
        }
        
      } else {
        const postDetails = result.value.getValue();

        // Sort the postDetails by the number of comments in descending order
        postDetails.sort((a, b) => b.numComments - a.numComments);

        // Get the top 5 posts
        const top5Posts = postDetails.slice(0, 5);

        return this.ok<GetPopularPostsResponseDTO>(res, {
          posts: top5Posts.map((d) => PostDetailsMap.toDTO(d))
        });
      }

    } catch (err) {
      return this.fail(res, err)
    }
  }
}