import axios from "axios";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Content() {

  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  
  const handleIndexPosts = () => {
  axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleCreatePost = (params) => {
    axios
    .post("http://localhost:3000/posts.json", params)
    .then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
  };

  const handleShowPost = (post) => {
    console.log(post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <div className="container">
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show ={isPostsShowVisible} onClose = {handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
      </div>
    </div>
  );
}
