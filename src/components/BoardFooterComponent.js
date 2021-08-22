import React from 'react';
import styled from "styled-components";

const BoardFooter = styled.div`
  display: flex;
  height: 50px;
  padding: 5px 40px;
  font-size: 20px;
`;
const BoardFooterTitle = styled.span`
  padding-right: 10px;
`;
const BoardFooterCreator = styled.span`
  padding-left: 10px;
`;


function BoardFooterComponent(props) {
  return (
    <BoardFooter>
      <BoardFooterTitle>{props.title}</BoardFooterTitle>
      {'|'}
      <BoardFooterCreator>{props.creator}</BoardFooterCreator>
    </BoardFooter>
  );
}

export default BoardFooterComponent;