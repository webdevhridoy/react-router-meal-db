import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';

const Post = () => {
    const details = useLoaderData();
    const postDetails = details.meals;
    // console.log(postDetails);
    return (
        <div>
            <div>
                {
                    postDetails.map(detail =>
                        <PostDetails
                            detail={detail}
                        ></PostDetails>
                    )
                }
            </div>
        </div>
    );
};

export default Post;