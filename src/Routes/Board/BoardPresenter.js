import { Table } from "semantic-ui-react";
import { Card, Col, Container, Row } from "react-bootstrap";

import HeaderContent from "../../Components/HeaderContent";

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
    <Container fluid className="px-lg-4 px-xl-5">
      <HeaderContent
        state={"board"}
        code={props.code}
        data={props.haveStockData}
      />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>번호</Table.HeaderCell>
            <Table.HeaderCell width={8}>제목</Table.HeaderCell>
            <Table.HeaderCell>글쓴이</Table.HeaderCell>
            <Table.HeaderCell>보유 수량</Table.HeaderCell>
            <Table.HeaderCell>등록일</Table.HeaderCell>
            <Table.HeaderCell>조회수</Table.HeaderCell>
            <Table.HeaderCell>추천</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {!props.postLoading &&
            props.postData &&
            props.postData.allpost &&
            props.postData.allpost
              .slice(0)
              .reverse()
              .map((post, index) => (
                <Table.Row
                  key={index}
                  onClick={() => props.onRowClick(post.id, props.code)}
                >
                  <Table.Cell>{post.id}</Table.Cell>
                  <Table.Cell>{post.title}</Table.Cell>
                  <Table.Cell>{post.user.nickname}</Table.Cell>
                  <Table.Cell>{post.amount}</Table.Cell>
                  <Table.Cell>{post.createdAt}</Table.Cell>
                  <Table.Cell>조회수</Table.Cell>
                  <Table.Cell>추천</Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
    </Container>
  );
};
