import React from "react";
import "./comment.css";
import { useGlobalContext } from "../../context";
function Comment() {
  const { theme } = useGlobalContext();
  return (
    <div className={theme ? "comment-light-mode" : "comment"}>
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="person-photo"
        className="person-photo"
      />
      <div className="right-side">
        <span className="comment-title">
          Jane Doe <span className="date">10 days ago</span>
        </span>

        <p className="comment-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          officia blanditiis! Ratione ipsa doloremque saepe laudantium
          consectetur excepturi, illum incidunt.
        </p>
      </div>
    </div>
  );
}

export default Comment;
