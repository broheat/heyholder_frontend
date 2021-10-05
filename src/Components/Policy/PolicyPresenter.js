import { Formik, Form as FormikForm, Field } from "formik";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Row className="justify-content-center">
      <Col lg={6}>
        <Card>
          <Card.Header>
            <h4 className="card-heading">
              개인 금융 정보 제공에 동의 하시겠습니까?
            </h4>
          </Card.Header>
          <Card.Body>
            <Formik
              initialValues={{
                nickname: "",
              }}
            >
              <FormikForm>
                <div className="form-floating mb-3">
                  <Field
                    id="floatingInput"
                    name="floatingInput"
                    className="form-control"
                    type="nickname"
                    placeholder="nickname"
                    value={props.nickName}
                    onChange={(e) => props.setNickName(e.target.value)}
                  />
                  <Form.Label
                    className="text-uppercase"
                    htmlFor="floatingInput"
                  >
                    닉네임
                  </Form.Label>
                </div>
                <Button
                  variant="secondary"
                  className="me-1"
                  onClick={props.disagreeClick}
                >
                  비동의
                </Button>
                {props.nickName ? (
                  <Button onClick={props.agreeClick}>동의</Button>
                ) : (
                  <Button disabled>동의</Button>
                )}
              </FormikForm>
            </Formik>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
