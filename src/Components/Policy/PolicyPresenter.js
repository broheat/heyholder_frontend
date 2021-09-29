import { Container, Button, Form } from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Container>
      <Form>
        <Form.Field
          width={16}
          name="username"
          type="text"
          label="닉네임"
          control="input"
          value={props.userName}
          onChange={(e) => props.setUserName(e.target.value)}
        ></Form.Field>
        <h3>개인 금융 정보 제공에 동의 하시겠습니까?</h3>
        {props.userName ? (
          <Button onClick={props.onClick} content="동의"></Button>
        ) : (
          <Button disabled content="동의"></Button>
        )}
        <Button onClick={props.logOut} content="비동의"></Button>
      </Form>
    </Container>
  );
};
