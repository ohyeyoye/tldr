import React from "react";
import styled from "styled-components";
import { Header, Content } from "./styled";
import { getDateString } from "../utils";
const Post = props => {
  const { className, post } = props;
  const updatedAt = getDateString(new Date(post.updatedAt));
  return (
    <div className={className}>
      <div className="top-container">
        <Header className="post-header">{post.title}</Header>
        <span className="date">{updatedAt}</span>
      </div>
      <Content className="post-content">{post.content}</Content>
    </div>
  );
};

export default styled(Post)`
  height: 10rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  .top-container {
    display: flex;
    align-items: center;
    .post-header {
      flex: 1;
    }
    .date {
      width: 6rem;
      color: gray;
      text-align: right;
    }
  }
  .post-content {
    padding-left: 0.5rem;
  }
`;
