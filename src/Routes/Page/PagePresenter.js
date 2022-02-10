import { Card, Container } from "react-bootstrap";
import Board from "../../Components/Board";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (
    props.postLoading ||
    props.haveStockLoading ||
    props.researchLoading ||
    props.getPostLoading ||
    props.totalAmountLoading
  ) {
    return (
      <Container fluid className="px-lg-4 px-xl-5">
        <div>loading</div>
      </Container>
    );
  }

  return (
    <div className="page-holder">
      <div className="page-header">
        <h1>
          {props.haveStockData.havestock.stockname}{" "}
          {props.totalAmountData?.totalAmount?.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}{" "}
          주
        </h1>
      </div>
      <section className="mb-3">
        <Card>
          <Board postData={props.postData} onClick={props.onClick} />
        </Card>
      </section>
    </div>
  );
};
