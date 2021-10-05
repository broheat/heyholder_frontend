import { Navbar } from "react-bootstrap";
import CompanyList from "../CompanyList";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <header className="header">
      <Navbar
        bg="white"
        expand="lg"
        variant={false}
        className="px-4 py-2 shadow"
      >
        <Navbar.Brand className="fw-bold text-base" href="/">
          <span className="d-brand">대주주</span>
        </Navbar.Brand>
        <div className="ms-auto d-flex align-items-center mb-0">
          <CompanyList allStockData={props.allStockData} />
        </div>
      </Navbar>
    </header>
  );
};
