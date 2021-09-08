import { createComment, getPost } from "./CommentsQuery";
import { Form } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import _ from "lodash";
import { useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ article }) => {
  const [contents, setContents] = useState("");

  const [addCommentMutation] = useMutation(createComment, {
    update: (cache, { data }) => {
      if (!_.isEmpty(data.createComment.errors)) return;

      const cacheData = cache.readQuery({
        query: getPost,
        variables: { id: article.getpost.id },
      });

      cacheData.getpost.commentSet.unshift(data.createComment.comment);
      cache.writeQuery({
        query: getPost,
        variables: { id: article.getpost.id },
        data: cacheData,
      });
    },
  });

  const onSubmit = async (e) => {
    if (contents !== "") {
      try {
        const { data } = await addCommentMutation({
          variables: { id: article.getpost.id, contents: contents },
        });

        if (!_.isEmpty(data.createComment.errors)) return;
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("내용을 적어주세요.");
    }
  };

  return (
    <Form onSubmit={onSubmit} style={{ marginBottom: "50px" }}>
      <Form.TextArea onChange={(e) => setContents(e.target.value)} />
      <Form.Button
        floated="right"
        content="등록"
        labelPosition="left"
        icon="edit"
        primary
      />
    </Form>
  );
};
