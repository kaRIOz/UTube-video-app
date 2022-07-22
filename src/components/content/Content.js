import React from "react";
import "./content.css";
import { useGlobalContext } from "../../context";
import Card from "../card/Card";

function Content() {
  const { theme } = useGlobalContext();
  return (
    <section className={`${theme ? "content-light-mode" : "content"}`}>
      <div className={`${theme ? "tags-light-mode" : "tags"}`}>
        <p className="tag active">All</p>
        <p className={`${theme ? "tag-light-mode" : "tag"}`}>Gaming</p>
        <p className={`${theme ? "tag-light-mode" : "tag"}`}>Music</p>
        <p className={`${theme ? "tag-light-mode" : "tag"}`}>Live</p>
        <p className={`${theme ? "tag-light-mode" : "tag"}`}>Playlist</p>
        <p className={`${theme ? "tag-light-mode" : "tag"}`}>HipHop</p>
      </div>
      <div>
        <Card />
      </div>
    </section>
  );
}

export default Content;
