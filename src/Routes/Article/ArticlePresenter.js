import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  getPostData,
  getPostLoading,
  haveStockLoading,
  haveStockData,
}) => {
  if (getPostLoading || haveStockLoading) {
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
    <div className="container-fluid article-background">
      <header className="article-header">
        <h1>주주 제안</h1>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "25%" }}
          >
            25%
          </div>
        </div>
      </header>
      <section className="article-content">
        <p>{getPostData.getpost?.contents}</p>
      </section>
      <form action="">
        <div className="form-group mx-sm-3 mb-2 article-input">
          <input
            type="text"
            id="inputStock"
            className="form-control"
            placeholder="수량을 입력해 주세요"
          />
          /
          <div className="number_of_stock">
            {haveStockData.havestock.amount}
          </div>
        </div>
        <div className="article-button">
          <button type="submit" class="article-btn btn-secondary">
            미참여
          </button>
          <button type="submit" class="article-btn btn-primary">
            참여
          </button>
        </div>
      </form>
    </div>
  );
};
