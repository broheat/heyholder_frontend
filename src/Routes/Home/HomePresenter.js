import {
  Container,
  Dropdown,
  Menu,
  Loader,
  Segment,
  Dimmer,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "1em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (props.loading) {
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
    <Menu secondary style={menuStyle}>
      <Container>
        <Menu.Item header>Home</Menu.Item>
        <Menu.Menu position="right">
          <Dropdown item simple text="나의 회사">
            <Dropdown.Menu>
              {!props.loading &&
                props.data &&
                props.data.allstock &&
                props.data.allstock.map((stock, index) => (
                  <Link key={index} to={`/board/${stock.code}`}>
                    <Dropdown.Item text={stock.stockname} />
                  </Link>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
