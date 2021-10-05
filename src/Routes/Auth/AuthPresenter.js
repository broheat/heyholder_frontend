import { Button, Col, Container, Form, Row, Image } from "react-bootstrap";
import styled from "styled-components";

const KakaoLogin = styled(Button)`
  background-color: #fee500;
  border-color: #fee500;
  color: #181600;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className="page-holder p-0">
      <Container fluid className="px-0">
        <Row className="gx-0 min-vh-100">
          <Col
            md={9}
            lg={6}
            xl={4}
            className="px-5 d-flex align-items-center shadow"
          >
            <div className="w-100 py-5">
              <div className="text-center">
                <img
                  className="img-fluid mb-4"
                  src="img/00-7.jpeg"
                  alt="..."
                  style={{ maxWidth: "6rem" }}
                />
                <h1 className="h4 text-uppercase mb-5">주주를 위하여</h1>
              </div>
              <Form method="get" action="/">
                <div className="d-grid mb-5">
                  <KakaoLogin
                    className="text-uppercase"
                    onClick={props.onClick}
                  >
                    카카오로 시작하기
                  </KakaoLogin>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={3} lg={6} xl={8} className="d-none d-md-block">
            <div className="bg-cover h-100 me-n3 position-relative">
              <Image
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  width: "0px",
                  height: "0px",
                }}
                src="https://t1.daumcdn.net/cfile/tistory/99C47F335D49951514"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
