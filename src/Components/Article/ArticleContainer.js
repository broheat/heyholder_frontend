import { useQuery } from "@apollo/client";
import {
  Container,
  Segment,
  Dimmer,
  Loader,
  Image,
  Grid,
  Header,
  Divider,
} from "semantic-ui-react";
import { getPost, haveStock } from "./ArticleQuery";
import HeaderContent from "../HeaderContent";
import Comments from "../Comments";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code, id },
  },
}) => {
  const { data, loading } = useQuery(getPost, {
    variables: { code: code, id: id },
  });
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );

  if (loading || haveStockLoading) {
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
      <HeaderContent
        code={code}
        stockname={haveStockData.havestock.stockname}
      />

      <Grid style={{ background: "#333" }}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1" inverted>
              {data.getpost.title}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid.Row style={{ margin: "60px" }}>
        <Grid.Column width={16}>{data.getpost.contents}</Grid.Column>
      </Grid.Row>
      <Divider />

      <Grid.Row textAlign="center">
        <Grid.Column textAlign="center">
          <Comments id={id} />
        </Grid.Column>
      </Grid.Row>
    </Container>
  );
};
