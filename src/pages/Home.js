import React from "react";
import ArticlePreviewContainer from "../components/article-preview/article-preview-container/ArticlePreviewContainer";
import Slideshow from "../components/slideshow/Slideshow";

const Home = () => {
  return (
    <div className="p-2">
      <h2>Home</h2>
      <Slideshow />
      <div className="flex">
        <ArticlePreviewContainer />
        <ArticlePreviewContainer />
      </div>
    </div>
  );
};

export default Home;
