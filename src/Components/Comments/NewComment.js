import { CREATE_COMMENT, GET_POST } from "./CommentsQuery";
import { Form } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import _ from "lodash";
import { useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ article }) => {
  const [comment, setComment] = useState("");
  const [createComment, { loading }] = useMutation(CREATE_COMMENT, {
    update(cache, { data: { createComment } }) {
      const { getpost } = cache.readQuery({
        query: GET_POST,
        variables: { id: article.getpost.id },
      });
      cache.writeQuery({
        query: GET_POST,
        variables: { id: article.getpost.id },
        data: { getpost: [...getpost, createComment] },
      });
    },
  });

  const onSubmit = async (e) => {
    if (comment !== "") {
      try {
        const { data } = await createComment({
          variables: { id: article.getpost.id, contents: comment },
        });
        setComment("");

        if (!_.isEmpty(data.createComment.errors)) return;
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("내용을 적어주세요.");
    }
  };

  return (
    <Form onSubmit={onSubmit} disabled={loading} className="comment-form">
      <Form.TextArea
        onChange={(e) => setComment(e.target.value)}
        placeholder="new comment"
        className="form-textArea"
      />
      <Form.Button content="등록" />
    </Form>
  );
};
