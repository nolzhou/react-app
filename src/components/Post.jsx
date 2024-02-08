import classes from './Post.module.css';

function Post(props) {
    // const chosenName = names[Math.floor(Math.random() * names.length)];
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author} says: </p>
            <p className={classes.body}>{props.body}</p>
        </li>
    );
}

export default Post;