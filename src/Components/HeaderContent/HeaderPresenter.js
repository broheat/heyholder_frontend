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
  state,
  code,
  stockname,
  totalAmountLoading,
  allStockLoading,
  totalAmountData,
  onClickWrite,
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
    <Container>
      <Menu secondary style={menuStyle}>
        <Menu.Item header>
          <Link to={`/main/${code}`}>{stockname}</Link>
        </Menu.Item>
        <Menu.Item header>
          총 보유 주식 수 :{" "}
          {totalAmountData?.totalAmount?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          주
        </Menu.Item>
        <Menu.Item position="right" onClick={() => onClickWrite(code)}>
          <Icon name="edit outline" />
          글쓰기
        </Menu.Item>
        <Dropdown item simple text="나의 회사">
          <Dropdown.Menu>
            {!allStockLoading &&
              allStockData &&
              allStockData.allstock &&
              allStockData.allstock.map((stock, index) => (
                <Link key={index} to={`/main/${stock.code}`}>
                  <Dropdown.Item text={stock.stockname} />
                </Link>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      <Menu widths={4}>
        <Menu.Item
          name="main"
          active={state === "main"}
          onClick={() => onClick("main", code)}
        />
        <Menu.Item
          name="게시판"
          active={state === "board"}
          onClick={() => onClick("board", code)}
        />
        <Menu.Item
          name="주주 제안"
          active={state === "propose"}
          onClick={() => onClick("propose", code)}
        />
        <Menu.Item
          name="리서치"
          active={state === "research"}
          onClick={() => onClick("research", code)}
        />
      </Menu>
    </Container>
  );
};
