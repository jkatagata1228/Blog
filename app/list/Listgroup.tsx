"use client";

import { ListGroup } from "react-bootstrap";

function Listgroup() {
  return (
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
  );
}

export default Listgroup;
