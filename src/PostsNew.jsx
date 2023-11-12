export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
  <div id="posts-new">
    <h1>New post</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        Title: <input className="form-control" type="text" name ="title" />
      </div>
      <div className="form-group">
        Image: <input className="form-control" type="text" name="image" />
      </div>
      <div className="form-group">
        Body: <input className="form-control" type="text" name="body" />
      </div>
      <button type="submit">Create Post</button>
    </form>
  </div>
  );
}
