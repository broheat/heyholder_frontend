import { Helmet } from "react-helmet";
import { Button, Loader, Segment, Dimmer, Image } from "semantic-ui-react";
import { Body, Wrapper, Content, Article } from "../../Styles/Wrapper";
import { whoAmI } from "./PolicyQuery";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onClick, logOut }) => {
  const { data: whoAmIData, loading: whoAmILoading } = useQuery(whoAmI);
  const history = useHistory();

  if (whoAmILoading) {
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }
  if (whoAmIData.whoami.agree1) {
    history.push(`/home`);
  } else {
    return (
      <Body>
        <Wrapper>
          <Helmet>
            <title>Log In | For 주주</title>
          </Helmet>
          <Content>
            <Article>
              <Button onClick={onClick} content="동의"></Button>
              <Button onClick={logOut} content="비동의"></Button>
            </Article>
          </Content>
        </Wrapper>
      </Body>
    );
  }
};
