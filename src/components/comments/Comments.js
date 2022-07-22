import React from "react";
import "./comments.css";
import { useGlobalContext } from "../../context";
import Comment from "../comment/Comment";
function Comments() {
  const { theme } = useGlobalContext();
  return (
    <section className="comments">
      <div className="new-comment">
        <img
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="person"
          className="person"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className={`${theme ? "comment-input-light-mode" : "comment-input"}`}
        />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <hr className={`${theme ? "hr-comments-light-mode" : "hr-comments"}`} />
    </section>
  );
}

export default Comments;
