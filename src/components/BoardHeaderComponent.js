import React from 'react';
import styled from "styled-components";

const BoardHeader = styled.div`
  display: flex;
  height: 50px;
  background: #5ef5f2;
`;
const BoardHeaderWrapper = styled.div`
  padding: 10px 20px;
  flex: 50%;
  border-right: 1px black solid;
`;
const BoardHeaderNumber = styled.span`
  font-size: 16px;
  font-weight: 800;
  padding-right: 5px;
`;
const BoardHeaderDirection = styled.span`
  font-weight: 800;
  padding-right: 10px;
`;
const BoardHeaderText = styled.span`
  padding-left: 10px;
`;


function BoardHeaderComponent(props) {
  return (
    <BoardHeader>
      {
        props.activeClue.map((clueID) => {
          const active = props.clues.find(clue => clue.id === clueID);
          return (
            <BoardHeaderWrapper key={'header' + clueID}>
              <BoardHeaderNumber>{active.number}</BoardHeaderNumber>
              <BoardHeaderDirection>{active.direction === 0 ? "Across" : "Down"}</BoardHeaderDirection>
              {'|'}
              <BoardHeaderText>{active.text}</BoardHeaderText>
            </BoardHeaderWrapper>
          );
        })
      }

    </BoardHeader>
  );
}

export default BoardHeaderComponent;