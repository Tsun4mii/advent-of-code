function extractEvents(input: string): string[] {
  const regex = /(do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\))/g;
  const events: string[] = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    events.push(match[0]);
  }

  return events;
}

export function solve(input: string): number {
  const events = extractEvents(input);
  let enabled = true;
  let sum = 0;

  for (const event of events) {
    if (event === 'do()') {
      enabled = true;
    } else if (event === "don't()") {
      enabled = false;
    } else if (event.startsWith('mul(')) {
      if (enabled) {
        const content = event.slice(4, -1);
        const [xStr, yStr] = content.split(',');
        const x = parseInt(xStr, 10);
        const y = parseInt(yStr, 10);
        sum += x * y;
      }
    }
  }

  return sum;
}
