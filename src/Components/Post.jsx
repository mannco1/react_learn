import React from 'react';

const Post = (props) => {
    console.log(props)
    return (
        <div>
            <strong>{props.post.id} {props.post.title} </strong>
            <div>
            {props.post.body} 
            </div>
        </div>
    );
};

export default Post;