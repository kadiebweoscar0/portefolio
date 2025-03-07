import React from "react";

interface SocialMediaProps {
  urlImage: string;
  linkMedia: string;
  altTxt: string;
  onClick?: () => void;
}

function SocialMedia({
  urlImage,
  linkMedia,
  altTxt,
  onClick,
}: SocialMediaProps) {
  return (
    <div className=" w-10 rounded-full">
      <a
        href={linkMedia}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className=" w-10 rounded-full"
      >
        <img src={urlImage} alt={altTxt} className=" rounded-lg" />
      </a>
    </div>
  );
}

export default SocialMedia;
