import { useState } from "react";

export function PostsIndex(props) {

  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);
  return (
    <div id="posts-index" className="container">
      <h1>All posts</h1>
      Search: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.posts.map(post => <option key={post.id}>{post.title}</option>)}
      </datalist>
      <div className="row">
      {props.posts
      .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
      .map((post) => (
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
