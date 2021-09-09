import {
  Container,
  Dropdown,
  Icon,
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
export default ({
  code,
  stockname,
  totalAmountLoading,
  allStockLoading,
  totalAmountData,
  onClick,
  allStockData,
}) => {
  if (totalAmountLoading || allStockLoading) {
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
        <Menu.Item header>{stockname}</Menu.Item>
        <Menu.Item header>
          총 보유 주식 수 :{" "}
          {totalAmountData.totalAmount?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          주
        </Menu.Item>
        <Menu.Item position="right" onClick={() => onClick(code)}>
          <Icon name="edit outline" />
          글쓰기
        </Menu.Item>
        <Dropdown item simple text="나의 회사">
          <Dropdown.Menu>
            {!allStockLoading &&
              allStockData &&
              allStockData.allstock &&
              allStockData.allstock.map((stock, index) => (
                <Link key={index} to={`/board/${stock.code}`}>
                  <Dropdown.Item text={stock.stockname} />
                </Link>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};
