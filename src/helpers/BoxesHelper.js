import definitions from "../crossword-puzzle.json";

export function organizeBoxes(clues) {
  let cells = definitions.cells;

  cells.map((cell) => {
    cell.clues = [];
    const cellID = cell.x + "-" + cell.y

    clues.forEach((clue) => {
      if (clue.boxes.indexOf(cellID) > -1) {
        cell.clues.push(clue.id);
      }
    });
    return cell;
  });
  return cells;
}