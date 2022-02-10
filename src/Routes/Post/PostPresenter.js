import {
  Container,
  Form,
  Segment,
  Dimmer,
  Loader,
  Image,
  Input,
  TextArea,
} from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  onSubmit,
  title,
  setTitle,
  setContents,
  contents,
  loading,
}) => {
  if (loading) {
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }

  return (
    <Container className="post-container">
      <Form onSubmit={onSubmit}>
        <Form.Field
          control={Input}
          value={title}
          placeholder="제목"
          onChange={(e) => setTitle(e.target.value)}
        ></Form.Field>
        <Form.Field
          control={TextArea}
          placeholder="내용"
          rows="15"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        >
          <input placeholder="내용" />
        </Form.Field>
        <Form.Button content="등록" />
      </Form>
    </Container>
  );
};
