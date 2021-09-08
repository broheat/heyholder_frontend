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
import HeaderContent from "../HeaderContent";
import Comments from "../Comments";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  getPostData,
  getPostLoading,
  haveStockData,
  haveStockLoading,
  code,
  id,
}) => {
  if (getPostLoading || haveStockLoading) {
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
              {getPostData.getpost.title}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid.Row style={{ margin: "60px" }}>
        <Grid.Column width={16}>{getPostData.getpost.contents}</Grid.Column>
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
