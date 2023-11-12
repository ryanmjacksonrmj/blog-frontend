export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index" className="container">
      <h1>All posts</h1>
      <div className="row">
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <div> {post.body} </div>
          <button onClick={() => props.onShowPost(post)}>Show Post</button>
        </div>
      ))}
      </div>  
    </div>
  );
}
