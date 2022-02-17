import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (
    props.getPostLoading ||
    props.haveStockLoading ||
    props.totalParticipantLoading ||
    props.participantShareLoading
  ) {
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }
  let participantRatio = 0;
  const outstandingShare = props.haveStockData.havestock.outstandingShare;
  const number_of_stock = props.haveStockData.havestock.amount;
  const participantShare = props.participantShareData.participantShare;
  const totalParticipant = props.totalParticipantData.totalParticipant;
  if (totalParticipant) {
    participantRatio = (
      (totalParticipant / (outstandingShare * 0.03)) *
      100
    ).toFixed(3);
  } else {
    participantRatio = 0;
  }

  return (
    <div className="container-fluid article-background">
      <header className="article-header">
        <h1>주주 제안</h1>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow={participantRatio}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${participantRatio}%` }}
          >
            <span className="progress-bar-text">{participantRatio}%</span>
          </div>
        </div>
      </header>
      <section className="article-content">
        <p>{props.getPostData.getpost?.contents}</p>
      </section>
      <form onSubmit={props.onSubmit}>
        <div className="form-group mx-sm-3 mb-2 article-input">
          <input
            type="number"
            id="inputStock"
            className="form-control"
            placeholder="수량을 입력해 주세요"
            max={number_of_stock}
            value={props.participantStock}
            onChange={(event) => props.setParticipantStock(event.target.value)}
          />
          /<div className="number_of_stock">{number_of_stock}</div>
        </div>
        <div className="article-button">
          <button type="button" class="article-btn btn-secondary">
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
