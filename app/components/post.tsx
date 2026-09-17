import React from 'react';
import { PostsData } from '../types/types';

interface PostProps {
    post: PostsData;
}

const Post = ({ post }: PostProps) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <figure>
                </figure>
            </div>
        </div>
    );
};

export default Post;