import React, { useState, useEffect } from "react";
import "./videoPage.css";
import data from "../../data";
import { useParams, Link } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import { useGlobalContext } from "../../context";

// icons
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import DownloadIcon from "@mui/icons-material/Download";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const { theme } = useGlobalContext();
  return (
    <section className="video-page">
      <div className="main-conetnt">
        <iframe
          src="https://www.youtube.com/embed/rUxyKA_-grg"
          title="YouTube player"
          width="100%"
          height="580px"
          allowFullScreen
          frameborder="0"
        ></iframe>
        <div className="single-video-footer">
          <p
            className={
              theme ? "single-video-title-light-mode" : "single-video-title"
            }
          >
            lofi hip hop radio-beats to relax/study to
          </p>
          <div className="single-video-btns">
            <p className="single-text-video">27K watching - 3 months ago</p>
            <div className="btns">
              <button className={theme ? "icon-btns-light-mode" : "icon-btns"}>
                <ThumbUpOffAltIcon />
                134
              </button>
              <button className={theme ? "icon-btns-light-mode" : "icon-btns"}>
                <ThumbDownOffAltIcon />
                DISLIKE
              </button>
              <button className={theme ? "icon-btns-light-mode" : "icon-btns"}>
                <span className="share">
                  <ReplyIcon />
                </span>
                SHARE
              </button>
              <button className={theme ? "icon-btns-light-mode" : "icon-btns"}>
                <DownloadIcon />
                DOWNLOAD
              </button>
              <button className={theme ? "icon-btns-light-mode" : "icon-btns"}>
                <LibraryAddIcon />
                SAVE
              </button>
            </div>
          </div>
          <hr
            className={`${theme ? "hr-light-mode" : "hr"}`}
            style={{ margin: "1rem 0" }}
          />
          <div className="owner">
            <img
              src="https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="owner-photo"
              className="owner-photo"
            />
            <div className={theme ? "owner-info-light-mode" : "owner-info"}>
              <div className="owner-title">
                <h3>Babel Media</h3>
                <button className="owner-btn">SUBSCRIBE</button>
              </div>
              <span className="owner-subscribe">19.8K subscribes</span>
              <p className="owner-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                magni facilis ducimus quis ad delectus nulla! Aperiam ducimus
                delectus pariatur maiores! Dolorum voluptatem inventore est
                facilis molestiae hic mollitia totam.
              </p>
            </div>
          </div>
          <hr
            className={`${theme ? "hr-light-mode" : "hr"}`}
            style={{ margin: "1rem 0" }}
          />
        </div>
        <Comments />
      </div>
      <div className="recommendation">
        {data.map((item) => {
          const { image, id, title, view, ChannelName } = item;

          return (
            <article key={id} className="single-recommendation">
              <img src={image} alt="banner" className="mini-banner" />
              <div className="footer">
                <div className="description">
                  <p className="title">{title}</p>
                  <p className="channel-name">{ChannelName}</p>
                  <p className="view">{view}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default VideoPage;
