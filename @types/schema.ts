export type TextValue = { type: "text"; text: string }
export type LinkValue = { type: "link"; text: string; href: string }
export type SignedDocValue = {
  type: "signedDocument"
  text: string
  href: string
  signHref?: string
  signInfo?: {
    owner: string
    dateSigning: string
    issuer: string
    hash: string
  }
}

export type PolymorphicValue = TextValue | LinkValue | SignedDocValue

export interface VerticalField {
  label: string;
  itemProp: string;
  value: PolymorphicValue;
}

export interface VerticalTableSection {
  sectionId: string;
  name: string;
  type: "verticalTable";
  data: VerticalField[];
}

export interface HorizontalCell {
  itemProp: string;
  value: PolymorphicValue;
}

export interface HorizontalRow {
  rowId: string;
  rowItemProp: string; 
  cells: HorizontalCell[];
}

export interface HorizontalTableSection {
  sectionId: string;
  name: string;
  type: "horizontalTable";
  headers: string[];
  data: HorizontalRow[];
}

export type SectionSchema = VerticalTableSection | HorizontalTableSection;
