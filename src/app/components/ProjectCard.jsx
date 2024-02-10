import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <Link href={gitUrl} target="_blank" rel="noopener noreferrer">
    <div className="card h-96 w-96 bg-[#fdfcf9fe] shadow-xl" role="link" tabIndex="0">
      <figure><img src={imgUrl} alt={description} /></figure>
      <div className="card-body" >
        <h2 className="card-title">
          {title}
        </h2>
        <p>{description}</p>
        {/*
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div> 
        </div> */}
      </div>
    </div>
  </Link>
);
};

export default ProjectCard;
