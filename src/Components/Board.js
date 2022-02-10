export default (props) => {
  return (
    <section>
      {props.postData &&
        props.postData.allpost &&
        props.postData.allpost
          .slice(0)
          .reverse()
          .map((post, index) => (
            <div
              className="card-body"
              key={index}
              onClick={() => props.onClick(post.id, post.code)}
            >
              <h5 className="card-title">{post.title}</h5>
              <div className="board-content">{post.contents}</div>
              <div className="board-info">
                <div className="user-info">
                  <p>{post.user.nickname}</p>
                  <p>{post.amount}주</p>
                </div>
                <p>{post.createdAt}</p>
              </div>
            </div>
          ))}
    </section>
  );
};
