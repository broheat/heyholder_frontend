import { Container } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (props.loading) {
    return <Container></Container>;
  }

  return (
    <Container>
      <h1>환영합니다.</h1>
    </Container>
  );
};
