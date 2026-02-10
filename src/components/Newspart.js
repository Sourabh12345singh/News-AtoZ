import React from "react";

const Newspart = ({ title, description, imageUrl, newsUrl }) => {
  const defaultImage =
    "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/def6/live/fcee0b30-c045-11ef-a0f2-fd81ae5962f4.jpg";

  return (
    <article className="news-card">
      <img
        src={imageUrl || defaultImage}
        alt={title || "News thumbnail"}
        loading="lazy"
        className="news-card-image"
      />
      <div className="news-card-body">
        <h3 className="news-card-title">{title || "Untitled Article"}</h3>
        <p className="news-card-description">
          {description || "No description available."}
        </p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="news-card-button"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

export default Newspart;
