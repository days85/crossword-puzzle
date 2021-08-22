import React from 'react';
import styled from "styled-components";

const Clue = styled.li`
  display: flex;
  position: relative;
  margin-bottom: 10px;
  height: 25px;
`;
const ClueButton = styled.button`
  display: flex;
  width: 100%;
  background: none;
  border: 0;
  color: inherit;
  text-align: left;
  cursor: pointer;
  padding: 4px 10px;
`;
const ClueNumber = styled.span`
  display: inline-block;
  font-weight: 800;
  padding-right: 10px;
`;
const ClueText = styled.span``;


class ClueComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.isActive,
      ref: React.createRef(),
    }
    this.handleClick = this.handleClick.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.isActive
    });

    if (nextProps.isActive) {
      this.state.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  handleClick() {
    const activeClue = [];
    activeClue.push(this.props.clueID);
    this.props.setActiveClueBoxes(this.props.clueBoxes);
    this.props.setActiveClue(activeClue);
    this.props.setBoxInFocus(this.props.clueBoxes[0]);
  }

  render() {
    return (
      <Clue className={`clue ${this.state.active ? 'active' : ''}`} ref={this.state.ref}>
        <ClueButton onClick={this.handleClick}>
          <ClueNumber>{this.props.number}</ClueNumber>
          <ClueText>{this.props.text}</ClueText>
        </ClueButton>
      </Clue>
    );
  }
}

export default ClueComponent;