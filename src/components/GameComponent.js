import React, {Component} from "react";
import definitions from "../crossword-puzzle.json";
import styled from "styled-components";
import BoardComponent from "./BoardComponent";
import ClueListsComponent from "./ClueListsComponent";
import {organizeClues} from "../helpers/CluesHelper";
import {organizeBoxes} from "../helpers/BoxesHelper";

const Game = styled.div`
  display: flex;
  margin: 0 auto;
  height: 800px;
`;

class GameComponent extends Component {
  constructor(props) {
    super(props);

    const clues = organizeClues();
    const grid = organizeBoxes(clues);

    this.state = {
      grid: grid,
      meta: definitions.meta,
      clues: clues,
      words: definitions.words,
      activeClue: [clues[0].id],
      activeClueBoxes: clues[0].boxes,
      boxInFocus: clues[0].boxes[0]
    };

    this.setActiveClueBoxes = this.setActiveClueBoxes.bind(this);
    this.setActiveClue = this.setActiveClue.bind(this);
    this.setBoxInFocus = this.setBoxInFocus.bind(this);
  }

  setActiveClueBoxes(boxes) {
    this.setState({
      activeClueBoxes: boxes,
    });
  }

  setActiveClue(clue) {
    this.setState({
      activeClue: clue,
    });
  }

  setBoxInFocus(box) {
    this.setState({
      boxInFocus: box,
    });
  }

  render() {
    return (
      <Game height={this.state.meta.size.height}>
        <BoardComponent
          grid={this.state.grid}
          meta={this.state.meta}
          highlightedBoxes={this.state.activeClueBoxes}
          boxInFocus={this.state.boxInFocus}
          allClues={this.state.clues}
          activeClue={this.state.activeClue}
          setActiveClueBoxes={this.setActiveClueBoxes}
          setActiveClue={this.setActiveClue}
          setBoxInFocus={this.setBoxInFocus}
        />
        <ClueListsComponent
          clues={this.state.clues}
          setActiveClueBoxes={this.setActiveClueBoxes}
          setActiveClue={this.setActiveClue}
          setBoxInFocus={this.setBoxInFocus}
          activeClue={this.state.activeClue}
        />
      </Game>
    );
  }
}

export default GameComponent;