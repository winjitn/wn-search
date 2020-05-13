import React from "react";

import "./Cards.css";

export default ({ item, setKeyword }) => {
  const { title, url, description, photos, tags } = item;
  return (
    <div className="card">
      <a
        className="img-wrapper"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="card-main-img" src={photos[0]} alt="dest-main" />
      </a>
      <div className="card-content">
        <h2 className="card-heading">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p className="card-desc">
          {description.substr(0, 100)} ....{" "}
          <a
            className="readmore"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            อ่านต่อ
          </a>
        </p>
        <div className="tags">
          <span>หมวด</span>
          <span className="tag" onClick={(e) => setKeyword(e.target.innerHTML)}>
            {tags[0]}
          </span>
          <span className="tag" onClick={(e) => setKeyword(e.target.innerHTML)}>
            {tags[1]}
          </span>
          <span>และ</span>
          <span className="tag" onClick={(e) => setKeyword(e.target.innerHTML)}>
            {tags[2]}
          </span>
        </div>
        <div className="content-img-ctn">
          {photos.slice(1).map((photoUrl) => {
            return (
              <a
                className="img-wrapper"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="content-img" src={photoUrl} alt="dest-small" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
