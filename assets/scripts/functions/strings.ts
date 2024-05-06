const abLower = `abcdefghijklmnopqrstuvwxyz`;
const abUpper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const numbers = `0123456789`;

export interface RandomStringGeneratorOptions {
  lowerCase?: boolean;
  upperCase?: boolean;
  numbers?: boolean;
}
export function randomString (length?: number, options?: RandomStringGeneratorOptions): string {
  const string = `${options?.lowerCase ? abLower : ''}${options?.upperCase ? abUpper : ''}${options?.numbers ? numbers : ''}`;
  let result = '';
  for (let i = 0; i < (length ?? 10); ++i)
    result += string[Math.floor(Math.random() * string.length)];
  return result;
}
