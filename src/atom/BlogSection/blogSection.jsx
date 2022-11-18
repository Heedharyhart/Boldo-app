import React from "react";
import BlogCard from "../BlogCardSection/blogCard";
import Button from "../Button/button";
import "./blogSection.scss";

const BlogSection = () => {
  return (
    <div className="blogSection">
      <div className="blogSection__wrapper">
        <h6 className="blogSection__title">Our Blog</h6>
        <h2 className="blogSection__content">
          Value proposition accelerator product <span>management venture.</span>
        </h2>
      </div>
      <div>
        <BlogCard />
      </div>
      <div className="blog-btn">
        <Button className="loadMore-btn">Load More</Button>
      </div>
    </div>
  );
};

export default BlogSection;
