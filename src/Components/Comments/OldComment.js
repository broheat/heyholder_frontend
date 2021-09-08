import { Comment } from "semantic-ui-react";

export default ({ username, createdAt, contents }) => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author>{username}</Comment.Author>
        <Comment.Metadata>
          <div>{createdAt}</div>
        </Comment.Metadata>
        <Comment.Text>{contents}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};
