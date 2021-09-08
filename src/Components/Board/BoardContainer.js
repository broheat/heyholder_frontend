import { withRouter } from "react-router-dom";
import BoardPresenter from "./BoardPresenter";

export default withRouter(
  ({
    match: {
      params: { code },
    },
  }) => {
    return <BoardPresenter code={code} />;
  }
);
