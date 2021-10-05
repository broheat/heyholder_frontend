import { Dropdown, NavItem, NavLink } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Dropdown as={NavItem} className="me-2 me-lg-3" align="end">
      <Dropdown.Toggle
        as={NavLink}
        className="text-gray-400 px-1 nav-link-icon"
        id="companylists"
      >
        나의 회사
      </Dropdown.Toggle>
      <Dropdown.Menu
        data-bs-popper="none"
        className="text-sm dropdown-menu-animated"
        aria-labelledby="companylists"
      >
        {props.allStockData &&
          props.allStockData.allstock &&
          props.allStockData.allstock.map((stock, index) => (
            <Dropdown.Item key={index} href={`/board/${stock.code}`}>
              {stock.stockname}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
