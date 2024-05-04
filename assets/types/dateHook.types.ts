export enum DateFormat {
  HUGE_TEXT = 'hugeText',
  FULL_NUMBER = 'fullNumber',
  FULL_TEXT = 'fullText',
  SHORT_NUMBER = 'shortNumber',
  SHORT_TEXT = 'shortText',
  TINY_TEXT = 'tinyText',
}
export interface DateHookOptions {
  format?: DateFormat
}
