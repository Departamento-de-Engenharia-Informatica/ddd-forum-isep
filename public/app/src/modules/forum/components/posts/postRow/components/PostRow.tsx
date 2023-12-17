
import React from 'react';
import "../styles/PostRow.sass"
import { Post } from '../../../../models/Post';
import { Points } from '../../points';
import PostMeta from '../../post/components/PostMeta';

interface PostRowProps extends Post {
  onUpvoteClicked: () => void;
  onDownvoteClicked: () => void;
  isLoggedIn: boolean;
}

function isPostFromToday(date: string | Date): boolean {
  const currentDate = new Date();
  const postDate = typeof date === "string" ? new Date(date) : date;
  let isSameYear = currentDate.getFullYear() == postDate.getFullYear()
  let isSameMonth = currentDate.getMonth() == postDate.getMonth()
  let isSameDay = currentDate.getDate() == postDate.getDate()
  return isSameYear && isSameMonth && isSameDay;
}

const PostRow: React.FC<PostRowProps> = (props) => (
  <div
    className="post-row"
    style={{ backgroundColor: isPostFromToday(props.createdAt) ? "red" : "" }}
  >
    <Points
      onUpvoteClicked={() => props.onUpvoteClicked()}
      onDownvoteClicked={() => props.onDownvoteClicked()}
      points={props.points}
      isLoggedIn={props.isLoggedIn}
    />
    <PostMeta {...props} />
  </div>
)

export default PostRow;