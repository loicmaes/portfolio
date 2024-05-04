export enum SectionType {
  SEPARATOR = 'separator',
  CALLOUT = 'callout',
  PARAGRAPH = 'paragraph',
}

export interface Callout {
  type: SectionType;
  icon?: string;
  content: string;
}
export interface Separator {
  type: SectionType;
}
export interface Paragraph {
  type: SectionType;
  title?: string;
  content: string;
}

export type ProjectContent = (Separator | Callout | Paragraph)[]
