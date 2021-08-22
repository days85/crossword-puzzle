import React from 'react';
import styled from "styled-components";
import BoxComponent from "./BoxComponent";
import BoardHeaderComponent from "./BoardHeaderComponent";
import BoardFooterComponent from "./BoardFooterComponent";

const Board = styled.div`
  display: flex;
  flex-direction: column;
  flex: 60%;
`;

const BoardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({width}) => (width * 50) + "px"};
  height: ${({height}) => (height * 50) + "px"};
`;

function BoardComponent(props) {
  return (
    <Board>
      <BoardHeaderComponent activeClue={props.activeClue} clues={props.allClues}/>
      <BoardBody
        width={props.meta.size.width}
        height={props.meta.size.height}
      >
        {
          props.grid.map((box) => {
            const {x, y, solution, number, clues} = box;
            const id = x + "-" + y;
            return <BoxComponent
              key={id}
              id={id}
              solution={solution}
              number={number}
              isFirstColumn={parseInt(x) === 1}
              isLastRow={parseInt(y) === parseInt(props.meta.size.height)}
              isHighlighted={props.highlightedBoxes.indexOf(id) > -1}
              isInFocus={props.boxInFocus === id}
              boxClues={clues}
              allClues={props.allClues}
              setActiveClueBoxes={props.setActiveClueBoxes}
              setActiveClue={props.setActiveClue}
              setBoxInFocus={props.setBoxInFocus}
            />
          })
        }
      </BoardBody>
      <BoardFooterComponent title={props.meta.title} creator={props.meta.creator}/>
    </Board>
    );
}

export default BoardComponent;
