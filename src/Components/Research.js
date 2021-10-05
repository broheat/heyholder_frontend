export default (props) => {
  return (
    <table className="table table-hover align-middle mb-0">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>애널리스트</th>
          <th>증권사</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        {props.researchData &&
          props.researchData.allResearch &&
          props.researchData.allResearch
            .slice(0)
            .reverse()
            .map((research, index) => (
              <tr
                key={index}
                onClick={() => {
                  if (research.company === "미래에셋대우") {
                    window.open(`${research.link}`);
                  } else if (research.company === "KB증권") {
                    props.goKB(research.documentid, research.link);
                  }
                }}
              >
                <td>{research.id}</td>
                <td>{research.title}</td>
                <td>{research.writer}</td>
                <td>{research.company}</td>
                <td>{research.day}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};
