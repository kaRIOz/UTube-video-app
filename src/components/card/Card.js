import React from "react";
import "./card.css";
import data from "../../data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

function Card() {
  const { theme } = useGlobalContext();
  return (
    <div className="cards">
      {data.map((item, idx) => {
        const { image, desImage, id, title, view, ChannelName } = item;

        return (
          <Link
            to={`/video/${id}`}
            key={idx}
            className={theme ? "light-single-card" : "single-card"}
          >
            <article>
              <img src={image} alt="banner" className="banner" />
              <div className="footer">
                <img src={desImage} alt="desimage" className="desImage" />
                <div className="description">
                  <p className="title">{title}</p>
                  <p className="channel-name">{ChannelName}</p>
                  <p className="view">{view}</p>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default Card;
