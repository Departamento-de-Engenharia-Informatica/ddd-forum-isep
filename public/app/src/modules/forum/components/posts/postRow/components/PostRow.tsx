import React from 'react';
import { isToday } from 'date-fns';
import "../styles/PostRow.sass"
import { Post } from '../../../../models/Post';
import { Points } from '../../points';
import PostMeta from '../../post/components/PostMeta';

interface PostRowProps extends Post {
    onUpvoteClicked: () => void;
    onDownvoteClicked: () => void;
    isLoggedIn: boolean;
}

const isPostCreatedToday = (createdAt: Date): boolean => {
    return isToday(createdAt);
}

const PostRow: React.FC<PostRowProps> = (props) => {
    const isTodayPost = isPostCreatedToday(new Date(props.createdAt));

    return (
        <div className="post-row">
            <Points
                onUpvoteClicked={() => props.onUpvoteClicked()}
                onDownvoteClicked={() => props.onDownvoteClicked()}
                points={props.points}
                isLoggedIn={props.isLoggedIn}
            />
            <div className={`post-row-content ${isTodayPost ? 'today-post' : ''}`}>
                <PostMeta {...props} />
            </div>
        </div>
    );
}

export default PostRow;
