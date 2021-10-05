import { Card, Col, Container, Row } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (props.postLoading || props.haveStockLoading) {
    return (
      <Container fluid className="px-lg-4 px-xl-5">
        <Row className="h-100">
          <Col md={3} className="mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex justify-content-center pt-5 pb-5"></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <div className="page-holder bg-gray-100">
      <Container fluid className="px-lg-4 px-xl-5">
        <div className="page-header d-flex justify-content between align-items-center">
          <h1 className="page-heading">
            {props.haveStockData.havestock.stockname}
          </h1>
        </div>
        <section className="mb-5">
          <Card className="card-table">
            <div
              className={`preload-wrapper ${
                props.postLoading ? "" : "opacity-10"
              }`}
            >
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>보유 수량</th>
                    <th>등록일</th>
                  </tr>
                </thead>
                <tbody>
                  {!props.postLoading &&
                    props.postData &&
                    props.postData.allpost &&
                    props.postData.allpost
                      .slice(0)
                      .reverse()
                      .map((post, index) => (
                        <tr
                          key={index}
                          onClick={() => props.onRowClick(post.id, props.code)}
                        >
                          <td>{post.id}</td>
                          <td>{post.title}</td>
                          <td>{post.user.nickname}</td>
                          <td>{post.amount}</td>
                          <td>{post.createdAt}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </Container>
    </div>
  );
};
