import { readFile } from 'node:fs/promises';

export async function readFileContent(filePath: string): Promise<string> {
  const content = await readFile(filePath, 'utf-8');
  return content.trim();
}

export async function readFileByLines(filePath: string): Promise<string[]> {
  const content = await readFileContent(filePath);
  return content.split('\n');
}

export async function readNonEmptyLines(filePath: string): Promise<string[]> {
  const lines = await readFileByLines(filePath);
  return lines.filter((line) => line.trim() !== '');
}
