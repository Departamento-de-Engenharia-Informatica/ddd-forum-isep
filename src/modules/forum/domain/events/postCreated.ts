
import { IDomainEvent } from "../../../../shared/domain/events/IDomainEvent";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { Post } from "../post";

/**
 * Represents the event of a post being created.
 */
export class PostCreated implements IDomainEvent {
  public dateTimeOccurred: Date;
  public post: Post;

  /**
   * Creates a new instance of the PostCreated event.
   * @param post The post that was created.
   */
  constructor (post: Post) {
    this.dateTimeOccurred = new Date();
    this.post = post;
  }
  
  /**
   * Gets the aggregate ID associated with the event.
   * @returns The unique entity ID of the post.
   */
  getAggregateId (): UniqueEntityID {
    return this.post.id;
  }
}