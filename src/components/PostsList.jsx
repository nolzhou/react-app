import NewPost from "./NewPost";
import classes from './PostsList.module.css';
import Modal from './Modal';
import Post from "./Post";

import { useState } from 'react';

function PostsList(props) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(post) {
        setPosts((prevPosts) => [post, ...prevPosts]);
    }

    return (
        <>
            {
                props.isShowModal &&
                <Modal onHideModal={props.onHideModal}>
                    <NewPost
                        onAddPost={addPostHandler} onHideModal={props.onHideModal}
                    />
                </Modal>
            }
            {
                posts.length === 0 && <p>No posts yet. Add one?</p>
            }
            {
                posts.length > 0 &&
                <ul className={classes.posts}>
                    {posts.map((post, index) => (
                        <Post key={index} author={post.author} body={post.text}></Post>
                    ))}
                </ul>
            }

        </>
    );
}

export default PostsList;