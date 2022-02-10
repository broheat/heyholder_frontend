import { Helmet } from "react-helmet";
import GetStock from "../GetStock";
import { Formik, Form as FormikForm, Field } from "formik";
import { Form, Button, Card, Col, Row, Modal } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Row className="justify-content-center">
      <Helmet>
        <title>Log In | For 주주</title>
      </Helmet>
      <Modal
        onClose={() => props.setOpen(false)}
        onOpen={() => props.setOpen(true)}
        open={props.open}
        trigger={
          <Button
            style={{ marginBottom: 10, backgroundColor: "#FEE500" }}
            size="large"
            fluid
          >
            <span style={{ fontSize: 15 }}>모바일 나무</span>
          </Button>
        }
      >
        <Modal.Header>자산 추가</Modal.Header>
        <Modal.Content>
          <Form onSubmit={props.onSubmit}>
            <Form.Group>
              <Form.Input
                placeholder="아이디를 입력하세요"
                name="id"
                value={props.companyId}
                onChange={(e) => props.setCompanyId(e.target.value)}
              />
              <Form.Input
                placeholder="비밀번호를 입력하세요"
                name="secret"
                value={props.companySecret}
                onChange={(e) => props.setCompanySecret(e.target.value)}
              />
              <Form.Button content="Submit" />
            </Form.Group>
          </Form>
        </Modal.Content>
      </Modal>
      <GetStock />
    </Row>
  );
};
