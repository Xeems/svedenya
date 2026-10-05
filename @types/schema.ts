export type TextValue = { 
  type: "text"; 
  text: string; 
  itemProp?: string;
  hidden?: boolean
};

export type LinkValue = Omit<TextValue, "type"> & {
  type: "link"; 
  href: string;
};

export type SignedDocValue = Omit<LinkValue, "type"> & {
  type: "signedDocument";
  signHref?: string;
  signInfo?: {
    owner: string;
    dateSigning: string;
    issuer: string;
    hash: string;
  };
};

export type PolymorphicValue = TextValue | LinkValue | SignedDocValue;


export type VerticalField = {
  label: string;
} & PolymorphicValue;

export interface VerticalTableSection {
  sectionId: string;
  name?: string;
  type: "verticalTable";
  data: VerticalField[];
  hidden: boolean;
}

export interface HorizontalRow {
  rowId: string;
  rowItemProp: string; 
  cells: PolymorphicValue[];
  hidden?: boolean
}

export interface HorizontalTableSection {
  sectionId: string;
  name?: string;
  type: "horizontalTable";
  headers: string[];
  hiddenColumns?: boolean[];
  data: HorizontalRow[];
  hidden?: boolean
}

export interface ListSection {
  sectionId: string;
  name?: string;
  type: "list";
  data: PolymorphicValue[];
  hidden?: boolean
}

export type PolymorphicValueSection = PolymorphicValue & {
  name?: string
  sectionId: string
} 

export type SectionSchema = VerticalTableSection | HorizontalTableSection | ListSection | PolymorphicValueSection;
