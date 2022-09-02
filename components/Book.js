import { useState } from "react";

export default function Book({ number, title, author, special, description }) {
  const [toggle, setToggle] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
    setIsHovering(false);
  };
  return (
    <div onClick={() => clickHandler()}>
      <p
        className={`${description.length > 0 && isHovering ? "font-bold" : ""}${
          special ? "text-hover" : ""
        }`}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {number}. <span className="font-bold">{title}</span> - {author}
      </p>
      {toggle ? (
        <p
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          className="pl-12 pt-4 pb-4"
        >
          {description}
        </p>
      ) : null}
      <br></br>
    </div>
  );
}
