import path from "path";
import { promises as fs } from "fs";
import { SectionSchema } from "@/@types/schema";

export async function getPageJson(slug: string): Promise<SectionSchema[] | undefined> {
    const filePath = path.join(process.cwd(), `app/(pages)/${slug}/${slug}.json`);

    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        return JSON.parse(fileContent) as SectionSchema[];
    } catch (e) {
        console.error("Ошибка чтения JSON", e);
    }

}