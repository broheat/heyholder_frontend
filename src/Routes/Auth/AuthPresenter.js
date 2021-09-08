import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Button, Image } from "semantic-ui-react";
import { Body, Wrapper, Content, Article } from "../../Styles/Wrapper";

// eslint-disable-next-line import/no-anonymous-default-export
const AuthHead = styled.div`
  max-width: 520px;
  text-align: center;
  margin: 0 auto;
`;

const Logo = styled.h1`
  display: inline-block;
  width: 109px;
  height: 27px;
  margin: 0 auto;
  line-height: 1;
  vertical-align: top;
  background: url(/assets/weblogin/techin/ico_account-4038b4e….png);
`;

const String = styled.span`
  display: block;
  overflow: hidden;
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const AccountIntro = styled.div`
  margin-top: 30px;
  display: block;
`;

const Title = styled.h2`
  padding-top: 10px;
  font-size: 24px;
  display: block;
  color: #252525;
  font-weight: normal;
  text-align: center;
`;

const AuthImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 30px auto 0;
  padding-bottom: 20px;
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onClick }) => {
  return (
    <Body>
      <Wrapper>
        <Helmet>
          <title>Log In | For 주주</title>
        </Helmet>
        <AuthHead>
          <Logo>
            <String>For 주주</String>
          </Logo>
        </AuthHead>
        <Content>
          <Article>
            <AccountIntro>
              <Title>주주들의 힘을 모읍시다.</Title>
              <AuthImage src="https://t1.daumcdn.net/cfile/tistory/99C47F335D49951514"></AuthImage>
              <Button
                style={{ marginBottom: 10, backgroundColor: "#FEE500" }}
                size="large"
                fluid
                onClick={onClick}
              >
                <Image
                  style={{
                    height: 22,
                    width: 22,
                    marginRight: 20,
                    color: "black",
                  }}
                  src="https://t1.daumcdn.net/cfile/tistory/992DA6415B743DB62B"
                  avatar
                />
                <span style={{ fontSize: 15 }}>카카오톡으로 시작하기</span>
              </Button>
            </AccountIntro>
          </Article>
        </Content>
      </Wrapper>
    </Body>
  );
};
