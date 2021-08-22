import React from 'react';
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  text-align: center;
  ${({isFirstColumn}) => !isFirstColumn && `border-left: 0;`}
  ${({isLastRow}) => !isLastRow && `border-bottom: 0;`}
  ${({hasLetter}) => !hasLetter && `background: #333;`}
`;

const Input = styled.input`
  width: ${({hasNumber}) => hasNumber ? "48px" : "49px"};
  height: 48px;
  border: 0;
  padding: 0;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
`;

const Number = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
`;


class BoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: props.isHighlighted,
      isInFocus: props.isInFocus,
    }

    this.handleFocus = this.handleFocus.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      highlight: nextProps.isHighlighted,
      isInFocus: nextProps.isInFocus,
    });
  }

  componentDidUpdate() {
    if (this.state.isInFocus) {
      this.textInput.focus();
    }
  }

  handleFocus(event) {
    this.props.setActiveClue(this.props.boxClues);

    let boxesToHighlight = [];

    this.props.boxClues.forEach((clue) => {
      boxesToHighlight = boxesToHighlight.concat(this.props.allClues.find(element => element.id === clue).boxes)
    });

    this.props.setActiveClueBoxes(boxesToHighlight);
    this.props.setBoxInFocus(event.target.id);
  }

  render() {
    return (
      <Box
        id={this.props.id}
        hasLetter={this.props.solution}
        isFirstColumn={this.props.isFirstColumn}
        isLastRow={this.props.isLastRow}
      >
        {
          this.props.number &&
          <Number>{this.props.number}</Number>
        }
        {
          this.props.solution &&
          <Input
            type="text"
            maxLength="1"
            className={ `box-input ${this.state.highlight ? 'highlight' : ''}` }
            hasNumber={!!this.props.number}
            onFocus={this.handleFocus}
            ref={(input) => {this.textInput = input}}
          />
        }
      </Box>
    );
  }
}

export default BoxComponent;

