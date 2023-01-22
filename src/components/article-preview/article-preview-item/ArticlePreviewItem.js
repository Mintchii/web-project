import React from "react";

const ArticlePreviewItem = ({ title, content, imgpreview }) => {
  return (
    <div className="flex p-4">
      <div className="w-24">
        <img src={imgpreview} alt="Logo" />
      </div>
      <div>
        <h2>{title}</h2>
        <p className="text-cyan-800">{content}</p>
      </div>
    </div>
  );
};

export default ArticlePreviewItem;
