"use client";

import { ListGroup } from "react-bootstrap";

function Listgroup() {
  return (
    <ListGroup>
      <ListGroup.Item action href="/list/React_Nextjs">
        React/Nextjs
      </ListGroup.Item>
      <ListGroup.Item action href="/list/CSS_SCSS">
        CSS/Sass
      </ListGroup.Item>
      <ListGroup.Item action href="/list/Git">
        Git
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Listgroup;
