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
  let count = 0;

  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (grid[i][j] !== 'A') continue;

      const mainFirst = grid[i - 1][j - 1];
      const mainLast = grid[i + 1][j + 1];
      const mainValid = (mainFirst === 'M' && mainLast === 'S') || (mainFirst === 'S' && mainLast === 'M');

      const antiFirst = grid[i - 1][j + 1];
      const antiLast = grid[i + 1][j - 1];
      const antiValid = (antiFirst === 'M' && antiLast === 'S') || (antiFirst === 'S' && antiLast === 'M');

      if (mainValid && antiValid) {
        count++;
      }
    }
  }

  return count;
}
