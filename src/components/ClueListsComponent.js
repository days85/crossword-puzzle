import React from 'react';
import styled from "styled-components";
import ClueListComponent from "./ClueListComponent";

const ClueLists = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 40%;
`;

function ClueListsComponent(props) {
  return (
    <ClueLists>
      <ClueListComponent
        clues={props.clues}
        direction={0}
        label="Across"
        setActiveClueBoxes={props.setActiveClueBoxes}
        setActiveClue={props.setActiveClue}
        setBoxInFocus={props.setBoxInFocus}
        activeClue={props.activeClue}
      />
      <ClueListComponent
        clues={props.clues}
        direction={1}
        label="Down"
        setActiveClueBoxes={props.setActiveClueBoxes}
        setActiveClue={props.setActiveClue}
        setBoxInFocus={props.setBoxInFocus}
        activeClue={props.activeClue}
      />
    </ClueLists>
  );
}

export default ClueListsComponent;