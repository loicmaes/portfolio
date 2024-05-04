export function emptyRange (length: number): number[] {
  return range(0, length);
}
export function range (from: number, to: number): number[] {
  const numbers: number[] = [];
  for (let i = from; i <= to; ++i) numbers.push(i);
  return numbers;
}
