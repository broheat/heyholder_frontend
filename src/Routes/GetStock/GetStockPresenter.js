import { Button } from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onClick }) => {
  return (
    <Button
      style={{ marginBottom: 10, backgroundColor: "#FEE500" }}
      size="large"
      fluid
      onClick={onClick}
    >
      <span style={{ fontSize: 15 }}>자산 불러오기</span>
    </Button>
  );
};
