export type TextValue = { 
  type: "text"; 
  text: string; 
  itemProp?: string;
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
}

export interface HorizontalRow {
  rowId: string;
  rowItemProp: string; 
  cells: PolymorphicValue[];
}

export interface HorizontalTableSection {
  sectionId: string;
  name?: string;
  type: "horizontalTable";
  headers: string[];
  data: HorizontalRow[];
}

export interface ListSection {
  sectionId: string;
  name?: string;
  type: "list";
  data: PolymorphicValue[];
}

export type PolymorphicValueSection = PolymorphicValue & {
  name?: string
  sectionId: string
} 

export type SectionSchema = VerticalTableSection | HorizontalTableSection | ListSection | PolymorphicValueSection;
