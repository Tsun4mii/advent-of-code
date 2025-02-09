function parseGrid(input: string): string[] {
  return input
    .trim()
    .split('\n')
    .map((line) => line.trim());
}

export function solve(gridInput: string): number {
  const grid = parseGrid(gridInput);
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  const directions = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
    [1, 1], // Down-Right
    [1, -1], // Down-Left
    [-1, 1], // Up-Right
    [-1, -1], // Up-Left
  ];

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== 'X') continue;

      for (const [dx, dy] of directions) {
        const i2 = i + dx;
        const j2 = j + dy;
        const i3 = i + 2 * dx;
        const j3 = j + 2 * dy;
        const i4 = i + 3 * dx;
        const j4 = j + 3 * dy;

        if (
          i4 >= 0 &&
          i4 < rows &&
          j4 >= 0 &&
          j4 < cols &&
          i3 >= 0 &&
          i3 < rows &&
          j3 >= 0 &&
          j3 < cols &&
          i2 >= 0 &&
          i2 < rows &&
          j2 >= 0 &&
          j2 < cols &&
          grid[i2][j2] === 'M' &&
          grid[i3][j3] === 'A' &&
          grid[i4][j4] === 'S'
        ) {
          count++;
        }
      }
    }
  }

  return count;
}
