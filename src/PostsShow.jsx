export function PostsShow(props) {
  props.post;
  return ( <div>
    <h2>Title: {props.post.title}</h2>
    <img src={props.post.image} />
    <p>{props.post.body}</p>
    </div>
  );
}