import React from "react";

import "./Presentation.scss";
import { Row, Col } from "react-bootstrap";

const Presentation: React.FC = () => {
  return (
    <Row className="presentation">
      <Col xs={12}>
        <h4>Bienvenue sur Pokemon App !</h4>
        <p>Retrouvez-ici les informations sur tous vos petits compagnons favoris.</p>
      </Col>
    </Row>
  );
};

export default Presentation;
