import React from "react";

interface SocialMediaProps {
  urlImage: string;
  linkMedia: string;
  altTxt: string;
  onClick?: () => void;
  disabled?: boolean;
}

function SocialMedia({
  urlImage,
  linkMedia,
  altTxt,
  onClick,
  disabled = false,
}: SocialMediaProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <div
      className={`w-10 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <a
        href={linkMedia}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 rounded-full block"
      >
        <img
          src={urlImage}
          alt={altTxt}
          className={`rounded-lg ${disabled ? "pointer-events-none" : ""}`}
        />
      </a>
    </div>
  );
}

export default SocialMedia;
