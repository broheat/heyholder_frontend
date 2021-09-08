import { useQuery } from "@apollo/client";
import { getPost } from "./CommentsQuery";
import {
  Loader,
  Segment,
  Dimmer,
  Image,
  Comment,
  Header,
} from "semantic-ui-react";
import OldComment from "./OldComment";
import NewComment from "./NewComment";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ id }) => {
  const { data: getPostData, loading: getPostLoading } = useQuery(getPost, {
    variables: { id },
  });

  if (getPostLoading) {
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
    <Comment.Group>
      <Header as="h3">댓글</Header>
      <NewComment article={getPostData} />
      {!getPostLoading &&
        getPostData &&
        getPostData.getpost &&
        getPostData.getpost.commentSet.map((comment, index) => (
          <OldComment
            key={index}
            username={comment.user.username}
            createdAt={comment.createdAt}
            contents={comment.contents}
          />
        ))}
    </Comment.Group>
  );
};
