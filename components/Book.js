import { useState } from "react";

export default function Book({ number, title, author, special, description }) {
  const [toggle, setToggle] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
    setIsHovering(false);
  };
  return (
    <div className="mb-3" onClick={() => clickHandler()}>
      <p
        className={`${
          description.length > 0 && isHovering ? "font-bold text-hover" : ""
        } ${special ? "text-hover" : ""}`}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {number}. <span className="font-bold">{title}</span> - {author}
        {description.length > 0 ? " *" : ""}
      </p>
      {toggle && description.length > 0 ? (
        <p
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          className="pl-6 pt-4 pb-4"
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
