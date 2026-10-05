// src/constants/adminPages.ts

export interface AdminPageInfo {
  slug: string;
  title: string;
  folderName: string;
  jsonFileName: string;
  publicHref: string;
}

export const ADMIN_PAGES: Record<string, AdminPageInfo> = {
  "budget": {
    slug: "budget",
    title: "Финансово-хозяйственная деятельность",
    folderName: "budget",
    jsonFileName: "budget.json",
    publicHref: "/sveden/budget"
  },
  "catering": {
    slug: "catering",
    title: "Организация питания",
    folderName: "catering",
    jsonFileName: "catering.json",
    publicHref: "/sveden/catering"
  },
  "common": {
    slug: "common",
    title: "Основные сведения",
    folderName: "common",
    jsonFileName: "common.json", 
    publicHref: "/sveden/common"
  },
  "document": {
    slug: "document",
    title: "Документы",
    folderName: "document",
    jsonFileName: "document.json",
    publicHref: "/sveden/document"
  },
  "education": {
    slug: "education",
    title: "Образование",
    folderName: "education",
    jsonFileName: "education.json",
    publicHref: "/sveden/education"
  },
  "eduStandarts": {
    slug: "eduStandarts",
    title: "Образовательные стандарты",
    folderName: "eduStandarts",
    jsonFileName: "eduStandarts.json",
    publicHref: "/sveden/eduStandarts"
  },
  "employees": {
    slug: "employees",
    title: "Педагогический состав",
    folderName: "employees",
    jsonFileName: "employees.json",
    publicHref: "/sveden/employees"
  },
  "grants": {
    slug: "grants",
    title: "Стипендии и меры поддержки",
    folderName: "grants",
    jsonFileName: "grants.json",
    publicHref: "/sveden/grants"
  },
  "inter": {
    slug: "inter",
    title: "Международное сотрудничество",
    folderName: "inter",
    jsonFileName: "inter.json",
    publicHref: "/sveden/inter"
  },
  "managers": {
    slug: "managers",
    title: "Руководство",
    folderName: "managers",
    jsonFileName: "managers.json",
    publicHref: "/sveden/managers"
  },
  "objects": {
    slug: "objects",
    title: "Материально-техническое обеспечение",
    folderName: "objects",
    jsonFileName: "objects.json",
    publicHref: "/sveden/objects"
  },
  "paid_edu": {
    slug: "paid_edu",
    title: "Платные образовательные услуги",
    folderName: "paid_edu",
    jsonFileName: "paid_edu.json",
    publicHref: "/sveden/paid_edu"
  },
  "struct": {
    slug: "struct",
    title: "Структура и органы управления",
    folderName: "struct",
    jsonFileName: "struct.json",
    publicHref: "/sveden/struct"
  },
  "vacant": {
    slug: "vacant",
    title: "Вакантные места для приема",
    folderName: "vacant",
    jsonFileName: "vacant.json",
    publicHref: "/sveden/vacant"
  }
};
