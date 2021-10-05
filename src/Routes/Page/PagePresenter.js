import { Card, Container } from "react-bootstrap";
import Board from "../../Components/Board";
import Research from "../../Components/Research";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (props.postLoading || props.haveStockLoading) {
    return (
      <Container fluid className="px-lg-4 px-xl-5">
        <div>loading</div>
      </Container>
    );
  }
  const renderSwitch = (type) => {
    switch (type) {
      case "board":
        return <Board postData={props.postData} />;
      case "research":
        const goKB = (id, url) => {
          document.forms[0].sDocumentid.value = id;
          document.forms[0].sUrlLink.value = url;
          const form = document.forms[0];
          form.action = "https://www.kbsec.com/go.able?linkcd=s040203010000";
          form.method = "POST";
          form.target = "_blank";
          form.submit();
        };
        return <Research goKB={goKB} researchData={props.researchData} />;
      default:
        return <Container></Container>;
    }
  };

  return (
    <div className="page-holder bg-gray-100">
      <Container fluid className="px-lg-4 px-xl-5">
        <div className="page-header d-flex justify-content between align-items-center">
          <h1 className="page-heading">
            {props.haveStockData.havestock.stockname}
          </h1>
        </div>
        <section className="mb-5">
          <Card className="card-table">
            <div
              className={`preload-wrapper ${
                props.postLoading ? "" : "opacity-10"
              }`}
            >
              {renderSwitch(props.type)}
            </div>
          </Card>
        </section>
      </Container>
    </div>
  );
};
