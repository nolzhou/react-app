import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props) {
    const [enteredText, setEnteredText] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function changetextHandler(event) {
        setEnteredText(event.target.value);
    }

    function updatePost(event) {
        event.preventDefault();
        const post = {
            text: enteredText,
            author: enteredAuthor
        };
        props.onAddPost(post);
        props.onHideModal();
    }

    return (
        <form className={classes.form} onSubmit={updatePost}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changetextHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeAuthorHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={props.onHideModal}>Cancel</button>
                <button type="submit">Add Post</button>
            </p>
        </form>
    );
}

export default NewPost;