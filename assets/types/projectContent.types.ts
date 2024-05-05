export enum SectionType {
  SEPARATOR = 'separator',
  CALLOUT = 'callout',
  PARAGRAPH = 'paragraph',
  IMAGE = 'image',
}

export interface Callout {
  type: SectionType.CALLOUT;
  icon?: string;
  content: string;
}
export interface Separator {
  type: SectionType.SEPARATOR;
}
export interface Paragraph {
  type: SectionType.PARAGRAPH;
  title?: string;
  content: string;
}
export interface Image {
  type: SectionType.IMAGE;
  src: string;
  caption?: string;
}

export type ProjectContent = (Separator | Callout | Paragraph | Image)[]
