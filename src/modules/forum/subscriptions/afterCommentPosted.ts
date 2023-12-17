
import { IHandle } from "../../../shared/domain/events/IHandle";
import { DomainEvents } from "../../../shared/domain/events/DomainEvents";
import { CommentPosted } from "../domain/events/commentPosted";
import { UpdatePostStats } from "../useCases/post/updatePostStats/UpdatePostStats";

/**
 * Handles the event when a comment is posted.
 * Implements the IHandle interface for CommentPosted events.
 */
export class AfterCommentPosted implements IHandle<CommentPosted> {
  private updatePostStats: UpdatePostStats;

   /**
   * Initializes a new instance of the AfterCommentPosted class.
   * @param updatePostStats - The service responsible for updating post statistics.
   */
  constructor (updatePostStats: UpdatePostStats) {
    this.setupSubscriptions();
    this.updatePostStats = updatePostStats;
  }


  /**
   * Sets up event subscriptions during class initialization.
   */
  setupSubscriptions(): void {
    // Register to the domain event
    DomainEvents.register(this.onCommentPosted.bind(this), CommentPosted.name);
  }

  /**
   * Handles the CommentPosted event by updating post statistics.
   * @param event - The CommentPosted event containing information about the posted comment.
   * @returns A promise that resolves when post statistics are successfully updated.
   */
  private async onCommentPosted (event: CommentPosted): Promise<void> {

    try {
      await this.updatePostStats.execute({ postId: event.post.postId.id.toString() });
      console.log(`[AfterCommentPosted]: Updated post stats for {${event.post.title.value}}`);
    } catch (err) {
      console.log(`[AfterCommentPosted]: Failed to update post stats for {${event.post.title.value}}`);
    }
  }

}