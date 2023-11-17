import axios from "axios";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";

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

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      console.log(response.data);
      setCurrentPost(response.data);
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      )
      handleClose();
    });
  }

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

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => { 
      console.log(response.data);
      setPosts(posts.filter((p) => p.id != post.id ));
      handleClose();
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
        <Routes>
          <Route path="/signup" element ={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <PostsNew onCreatePost={handleCreatePost} />
      <LogoutLink />
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show ={isPostsShowVisible} onClose = {handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost}/>
      </Modal>
      </div>
    </div>
  );
}
