import React from 'react';
import './blogCard.scss';
import BlogData from "./blogData";

const BlogCard = () => {
  return (
    <div>
      <div className="blogSectionCard">
          {BlogData.map((data) => (
            <div className="blogSectionCard__wrapper">
              <img alt="card-img" src={data.img} />
              <h5 className="blogSectionCard__heading">
                Category <span className="category">{data.category}</span>
              </h5>
              <h6 className="blogSectionCard__content">{data.content}</h6>
              <div className="blogAvatar">
                <img alt="blog-avatar" src={data.avatarImg} />
                <div>
                  <h6>{data.avaterName}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default BlogCard