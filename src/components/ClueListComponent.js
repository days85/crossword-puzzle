import React from 'react';
import styled from "styled-components";
import ClueComponent from "./ClueComponent";

const ClueList = styled.div`
  height: 50%;
  padding-bottom: 50px;
`;

const ClueListLabel = styled.h2`
  margin-top: 0;
  margin-bottom: 5px;
`;

const ClueListWrapper = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: auto;
`;

function ClueListComponent(props) {

  const filtered = props.clues.filter(clue => clue.direction === props.direction);

  return (
    <ClueList>
      <ClueListLabel>{props.label}</ClueListLabel>
      <ClueListWrapper>
      {
        filtered.map((clue) => {
          return (
            <ClueComponent
              key={clue.id}
              clueID={clue.id}
              number={clue.number}
              text={clue.text}
              clueBoxes={clue.boxes}
              setActiveClueBoxes={props.setActiveClueBoxes}
              setActiveClue={props.setActiveClue}
              setBoxInFocus={props.setBoxInFocus}
              isActive={props.activeClue.indexOf(clue.id) > -1}
            />
          );
        })
      }
      </ClueListWrapper>
    </ClueList>
  );
}

export default ClueListComponent;