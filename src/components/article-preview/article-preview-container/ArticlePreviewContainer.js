import React from "react";
import ArticlePreviewItem from "../article-preview-item/ArticlePreviewItem";

const articles = [
  {
    title: "Title 1",
    content: "Content 1",
    imgpreview:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Title 2",
    content: "Content 2",
    imgpreview:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Title 3",
    content: "Content 3",
    imgpreview:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Title 4",
    content: "Content 4",
    imgpreview:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
];

const ArticlePreviewContainer = () => {
  return (
    <div className="grid gap-4 grid-cols-1 border-solid border-2 border-indigo-600 w-1/2">
      <h2>Block Title</h2>
      {articles.map((item, index) => {
        return (
          <ArticlePreviewItem
            key={index}
            title={item.title}
            content={item.content}
            imgpreview={item.imgpreview}
          />
        );
      })}
    </div>
  );
};

export default ArticlePreviewContainer;
