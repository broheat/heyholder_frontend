import { Container } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (props.loading) {
    return <Container></Container>;
  }

  return <Container></Container>;
};
