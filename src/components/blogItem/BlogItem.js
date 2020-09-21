import React from "react";
import "./BlogItem.css";

function BlogItem({ title, image, desc, link }) {
  return (
    <div className="blogItem">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="blogItem__image">
          <img src={image} alt="blog" />
        </div>

        <h3>{title}</h3>
        <div className="blogItem__bar"></div>
        <p>{desc}</p>
      </a>
    </div>
  );
}

export default BlogItem;
