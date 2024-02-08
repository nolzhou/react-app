import NewPost from "./NewPost";
import classes from './PostsList.module.css';
import Modal from './Modal';

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
            <ul className={classes.posts}>
                {posts.map((post, index) => (
                    <li key={index}>
                        <p>{post.text} says: </p>
                        <div>
                            <p>Author: {post.author}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PostsList;