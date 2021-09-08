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
import { allStock, totalAmount } from "./HeaderQuery";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "1em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ code, stockname }) => {
  const { data, loading } = useQuery(allStock);
  const { data: totalAmountData, loading: totalAmountLoading } = useQuery(
    totalAmount,
    { variables: { code } }
  );

  const history = useHistory();

  const onClick = (code) => {
    history.push(`/post/${code}`);
  };

  useEffect(() => {
    if (data && !data.allstock) history.push("/getAccount");
  }, [data]);

  if (totalAmountLoading || loading) {
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
        <Menu.Item header onClick={() => history.push(`/stock/${code}`)}>
          {stockname}
        </Menu.Item>
        <Menu.Item header>
          총 보유 주식 수 :{" "}
          {totalAmountData.totalamount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 주
        </Menu.Item>
        <Menu.Item position="right" onClick={() => onClick(code)}>
          <Icon name="edit outline" />
          글쓰기
        </Menu.Item>
        <Dropdown item simple text="나의 회사">
          <Dropdown.Menu>
            {!loading &&
              data &&
              data.allstock &&
              data.allstock.map((stock, index) => (
                <Link key={index} to={`/stock/${stock.code}`}>
                  <Dropdown.Item text={stock.stockname} />
                </Link>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};
