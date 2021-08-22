import definitions from "../crossword-puzzle.json";

export function organizeClues() {
  let organized = [];

  definitions.clues.forEach((clue) => {

    /** @param {{solution:string}} word **/
    let word = searchClueWord(clue.word);
    let boxes = divideBoxes(word);

    let c = {
      id: clue.direction + "-"+ clue.number,
      text: clue.text,
      answer: word.solution,
      direction: clue.direction,
      number: clue.number,
      boxes: boxes,
    };
    organized.push(c);
  });

  return organized;
}

function searchClueWord(wordId) {
  return definitions.words.find(word => word.id === wordId);
}

function divideBoxes(word) {
  let x = word.x;
  let y = word.y;
  let rangeX = getRange(x);
  let rangeY = getRange(y);

  return getBoxesFromRanges(rangeX, rangeY);
}

function getRange(entry) {
  let nums = [];

  if (!~entry.indexOf('-')) {
    nums.push(+entry);
    return nums;
  }

  let range = entry.split('-');
  let low = +range[0];
  let high = +range[1];
  while (low <= high) {
    nums.push(low++);
  }
  return nums;
}

function getBoxesFromRanges(rangeX, rangeY) {
  let boxes = [];
  rangeX.forEach((x) => {
    rangeY.forEach((y) => {
      boxes.push(x + "-" + y)
    });
  });
  return boxes;
}