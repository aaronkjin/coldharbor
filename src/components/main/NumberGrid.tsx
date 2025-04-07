import { useState, useEffect } from "react";
import { NumberCell } from "./NumberCell";

interface HoveredCell {
  row: number;
  col: number;
}

// Gen random grid data
const generateGridData = () => {
  const rows = 8;
  const cols = 24;
  const grid: string[][] = [];

  for (let i = 0; i < rows; i++) {
    const row: string[] = [];
    for (let j = 0; j < cols; j++) {
      // Gen random single digit number
      row.push(Math.floor(Math.random() * 10).toString());
    }
    grid.push(row);
  }

  if (grid.length > 3) {
    // Row 3 (index 2)
    if (grid[2] && grid[2].length > 15) {
      grid[2][12] = "1";
      grid[2][13] = "6";
      grid[2][14] = "6";
      grid[2][15] = "1";
    }
    // Row 4 (index 3)
    if (grid[3] && grid[3].length > 15) {
      grid[3][12] = "8";
      grid[3][13] = "6";
      grid[3][14] = "9";
      grid[3][15] = "6";
      grid[3][16] = "6";
    }
    // Row 5 (index 4)
    if (grid[4] && grid[4].length > 15) {
      grid[4][12] = "5";
      grid[4][13] = "4";
      grid[4][14] = "0";
      grid[4][15] = "1";
    }
  }

  return grid;
};

export const NumberGrid = () => {
  const [grid, setGrid] = useState<string[][]>([]);
  const [hoveredCell, setHoveredCell] = useState<HoveredCell | null>(null);

  // Generate grid on client-side only
  useEffect(() => {
    setGrid(generateGridData());
  }, []);

  const getProximity = (row: number, col: number) => {
    if (!hoveredCell) return 0;

    const rowDiff = Math.abs(hoveredCell.row - row);
    const colDiff = Math.abs(hoveredCell.col - col);
    const distance = Math.sqrt(rowDiff * rowDiff + colDiff * colDiff);

    return Math.max(0, 1 - distance / 2);
  };

  const isHighlighted = (row: number, col: number) => {
    // Row 3 (index 2)
    if (row === 2 && col >= 12 && col <= 15) return true;
    // Row 4 (index 3)
    if (row === 3 && col >= 12 && col <= 16) return true;
    // Row 5 (index 4)
    if (row === 4 && col >= 12 && col <= 15) return true;
    return false;
  };

  return (
    <div className="w-full max-w-6xl">
      <div className="grid grid-rows-8 gap-2">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-24 gap-2">
            {row.map((number, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onMouseEnter={() =>
                  setHoveredCell({ row: rowIndex, col: colIndex })
                }
                onMouseLeave={() => setHoveredCell(null)}
              >
                <NumberCell
                  number={number}
                  isHighlighted={isHighlighted(rowIndex, colIndex)}
                  proximity={getProximity(rowIndex, colIndex)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
