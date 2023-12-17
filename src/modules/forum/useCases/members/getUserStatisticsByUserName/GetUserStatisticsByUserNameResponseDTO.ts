
import { MemberDTO } from "../../../dtos/memberDTO";

export interface GetUserStatisticsByUserNameResponseDTO {
  username: string;
  reputation: number;
  numberOfPublishedPosts: number;
  numberOfCommentedPosts: number;
}