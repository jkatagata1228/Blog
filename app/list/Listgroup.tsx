"use client";

import { ListGroup } from "react-bootstrap";
import style from "./Listgroup.module.scss";
import { useEffect, useState } from "react";

const Listgroup = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(!animation);
    }, 10);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${style.listgroup} ${animation ? style.animation : ""}`}>
      <ListGroup>
        <ListGroup.Item action href="/list/react_nextjs">
          React/Nextjs
        </ListGroup.Item>
        <ListGroup.Item action href="/list/css_scss">
          CSS/Sass
        </ListGroup.Item>
        <ListGroup.Item action href="/list/git">
          Git
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Listgroup;
