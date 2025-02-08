import { readFile } from 'node:fs/promises';
import path from 'node:path';

async function main() {
  const [year, day, part] = process.argv.slice(2);

  if (!year || !day) {
    throw new Error('Please provide year and day (e.g. 2023 01)');
  }

  const paddedDay = day.padStart(2, '0');
  const solutionPath = path.join(process.cwd(), 'src', year, `day${paddedDay}`, `part${part || '1'}.ts`);

  const inputPath = path.join(process.cwd(), 'src', year, `day${paddedDay}`, 'input.txt');

  try {
    const { solve } = await import(solutionPath);
    const input = await readFile(inputPath, 'utf-8');
    const result = solve(input.trim());
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
