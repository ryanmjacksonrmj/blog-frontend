import axios from "axios";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Content() {

  // let posts = [];

  const [posts, setPosts] = useState([]);

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [currentPost, setCurrentPost] = useState({});


  const handleIndexPosts = () => {
  axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);


  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show ={isPostsShowVisible} onClose = {handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
