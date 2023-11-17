export function PostsShow(props) {
  props.post;
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };
  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return ( <div>
    <h2>Title: {props.post.title}</h2>
    <img src={props.post.image} />
    <p>{props.post.body}</p>
    <p></p>
    <p></p>
    <h1>Update post</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        Title: <input className="form-control" defaultValue={props.post.title} type="text" name ="title" />
      </div>
      <div className="form-group">
        Image: <input className="form-control" defaultValue={props.post.image} type="text" name="image" />
      </div>
      <div className="form-group">
        Body: <input className="form-control" defaultValue={props.post.body} type="text" name="body" />
      </div>
      <button type="submit">Update Post</button>
    </form>
      <button onClick={handleClick} className="btn btn-danger"> Delete Post</button>
    </div>
  );
}