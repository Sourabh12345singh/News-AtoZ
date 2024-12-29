import React from "react";

const Newspart = ({ title, discription, imageurl, newsurl }) => {
  // Inline CSS for centering the card
  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };

  const cardStyle = {
    width: "18rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const cardImageStyle = {
    height: "200px",
    objectFit: "cover",
  };

  return (
    <div style={cardContainerStyle}>
      <div className="card" style={cardStyle}>
        <img
          src={
            imageurl ||
            "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/def6/live/fcee0b30-c045-11ef-a0f2-fd81ae5962f4.jpg"
          }
          alt="News Thumbnail"
          loading="lazy"
          className="card-img-top"
          style={cardImageStyle}
        />
        <div className="card-body">
          <h5 className="card-title">{title || "Untitled Article"}</h5>
          <p className="card-text">
            {discription || "No description available."}
          </p>
          <a
            rel="noreferrer"
            href={newsurl}
            target="_blank"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newspart;
