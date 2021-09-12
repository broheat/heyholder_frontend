import {
  Table,
  Message,
  Container,
  Loader,
  Segment,
  Dimmer,
  Image,
} from "semantic-ui-react";
import HeaderContent from "../HeaderContent";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  code,
  researchData,
  researchLoading,
  haveStockData,
  haveStockLoading,
  onRowClick,
}) => {
  if (researchLoading || haveStockLoading) {
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
      <HeaderContent state={"research"} code={code} data={haveStockData} />
      <Message
        header="알려드립니다!"
        content="리서치 자료는 제공 되지 않고, 링크 주소만 제공 됩니다."
      />

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>번호</Table.HeaderCell>
            <Table.HeaderCell width={6}>제목</Table.HeaderCell>
            <Table.HeaderCell>애널리스트</Table.HeaderCell>
            <Table.HeaderCell>증권사</Table.HeaderCell>
            <Table.HeaderCell>등록일</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {!researchLoading &&
            researchData &&
            researchData.allResearch &&
            researchData.allResearch
              .slice(0)
              .reverse()
              .map((research, index) => (
                <Table.Row
                  key={index}
                  onClick={() => {
                    window.open(`${research.link}`);
                  }}
                >
                  <Table.Cell>{research.id}</Table.Cell>
                  <Table.Cell>{research.title}</Table.Cell>
                  <Table.Cell>{research.writer}</Table.Cell>
                  <Table.Cell>{research.company}</Table.Cell>
                  <Table.Cell>{research.day}</Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
    </Container>
  );
};
