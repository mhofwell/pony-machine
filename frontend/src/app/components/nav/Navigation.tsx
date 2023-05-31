import React from "react";

const Navigation = (props: any) => {
  return (
    <nav>
      <ol className={props.styles}>
        <li>Home</li>
        <li>Contact</li>
      </ol>
    </nav>
  );
};

export default Navigation;
