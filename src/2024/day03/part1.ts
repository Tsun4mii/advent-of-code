function extractValidMuls(input: string): Array<[number, number]> {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches: Array<[number, number]> = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    matches.push([x, y]);
  }

  return matches;
}

export function solve(input: string): number {
  const muls = extractValidMuls(input);
  return muls.reduce((sum, [x, y]) => sum + x * y, 0);
}
