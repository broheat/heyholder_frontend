export default (props) => {
  return (
    <table className="table table-hover align-middle mb-0">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>보유 수량</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        {props.postData &&
          props.postData.allpost &&
          props.postData.allpost
            .slice(0)
            .reverse()
            .map((post, index) => (
              <tr key={index} onClick={() => props.onClick(post.id, post.code)}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.user.nickname}</td>
                <td>{post.amount}</td>
                <td>{post.createdAt}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};
