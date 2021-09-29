import {
  Container,
  Form,
  Segment,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import HeaderContent from "../../Components/HeaderContent";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  code,
  onSubmit,
  title,
  setTitle,
  setContents,
  contents,
  loading,
  data,
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
    <Container>
      <HeaderContent code={code} data={data} />
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Field
            width={16}
            name="title"
            type="text"
            label="제목"
            control="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field
            width={16}
            name="contents"
            type="textarea"
            label="내용"
            control="textarea"
            rows="15"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          ></Form.Field>
        </Form.Group>
        <Form.Button content="Submit" />
      </Form>
    </Container>
  );
};
