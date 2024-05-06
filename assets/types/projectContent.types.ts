export enum SectionType {
  SEPARATOR = 'separator',
  CALLOUT = 'callout',
  PARAGRAPH = 'paragraph',
  IMAGE = 'image',
  ACCORDION = 'accordion',
  FAQ = 'faq',
  LIST = 'list',
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
export interface Accordion {
  type: SectionType.ACCORDION;
  title: string;
  content: string;
  foot?: string;
}
export interface FAQ {
  type: SectionType.FAQ;
  questions: Accordion[];
}
export interface List {
  type: SectionType.LIST;
  ordered?: boolean;
  items: string[];
}

export type ProjectContent = (Separator | Callout | Paragraph | Image | Accordion | FAQ | List)[];
