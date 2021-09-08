import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import {
  Table,
  Container,
  Loader,
  Segment,
  Dimmer,
  Image,
} from "semantic-ui-react";
import HeaderContent from "../HeaderContent";
import { allPost, haveStock } from "./BoardQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ code }) => {
  const history = useHistory();
  const { data, loading } = useQuery(haveStock, { variables: { code } });

  const onRowClick = (id, code) => {
    history.push(`/article/${code}/${id}`);
  };

  useEffect(() => {
    if (data && !data.havestock) history.push("/");
  }, [data, history]);

  const { data: postData, loading: postLoading } = useQuery(allPost, {
    variables: { code },
  });

  if (postLoading || loading) {
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
      <HeaderContent code={code} stockname={data.havestock.stockname} />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>번호</Table.HeaderCell>
            <Table.HeaderCell width={10}>제목</Table.HeaderCell>
            <Table.HeaderCell>글쓴이</Table.HeaderCell>
            <Table.HeaderCell>보유 수량</Table.HeaderCell>
            <Table.HeaderCell>등록일</Table.HeaderCell>
            <Table.HeaderCell>조회수</Table.HeaderCell>
            <Table.HeaderCell>추천</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {!postLoading &&
            postData &&
            postData.allpost &&
            postData.allpost.map((post, index) => (
              <Table.Row key={index} onClick={() => onRowClick(post.id, code)}>
                <Table.Cell>{post.id}</Table.Cell>
                <Table.Cell>{post.title}</Table.Cell>
                <Table.Cell>{post.user.username}</Table.Cell>
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
