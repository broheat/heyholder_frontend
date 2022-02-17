import { Navbar } from "react-bootstrap";
import CompanyList from "../CompanyList";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <header className="header">
      <Navbar variant={false} className="shadow">
        <Navbar.Brand className="fw-bold text-base" href="/">
          <span className="d-brand">대주주</span>
        </Navbar.Brand>
        <Navbar.Brand
          className="fw-bold text-base"
          href={`/post/${props.code}`}
        >
          <span className="d-brand">글쓰기</span>
        </Navbar.Brand>
        <div className="ms-auto d-flex align-items-center mb-0">
          <CompanyList allStockData={props.allStockData} />
        </div>
      </Navbar>
    </header>
  );
};
