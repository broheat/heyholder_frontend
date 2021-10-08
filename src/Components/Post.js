import { Form, Button } from "react-bootstrap";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      <Form onSubmit={props.onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목"
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>글 내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={props.contents}
            onChange={(e) => props.setContents(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
