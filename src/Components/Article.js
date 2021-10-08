import { Col, Row, Button, Card } from "react-bootstrap";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Row className="mb-3">
      <Col lg={9} xl={8}>
        <Card className="mb-5">
          <Card.Body className="p-5">
            <div className="text-content">
              <p>{props.contents}</p>
            </div>
          </Card.Body>
          <Card.Footer className="text-center py-5">
            <h6>Was this article helpful?</h6>
            <Button variant="success" className="text-white me-1">
              <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
              Yes
            </Button>
            <Button variant="danger">
              <FontAwesomeIcon icon={faThumbsDown} className="me-2" />
              No
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};
