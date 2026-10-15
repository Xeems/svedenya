import PageH1Header from "@/components/PageH1Header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon } from "lucide-react"

export default async function DocumentsPage() {
    return (
        <main className="flex gap-y-8 flex-col w-full">
            <PageH1Header>Документы</PageH1Header>
            <div className="flex flex-row gap-4 justify-end align-bottom">
                <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-row w-full gap-4">
                        <div className="w-full">
                            <Label className="text-muted-foreground font-light normal-case">Искать по названию:</Label>
                            <Input placeholder="Введите название документа" />
                        </div>
                        <div className="w-full">
                            <Label className="text-muted-foreground font-light normal-case">Расширение документа:</Label>
                            <Select>
                                <SelectTrigger className="w-full ">
                                    <SelectValue placeholder="Тип документа" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="all">(Все)</SelectItem>
                                        <SelectItem value="doc">.doc</SelectItem>
                                        <SelectItem value="pdf">.pdf</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Checkbox /> <Label>С электронной подписью</Label>
                    </div>
                </div>
                <Button className="bg-blue-700 text-white font-light self-end hover:bg-blue-800"><SearchIcon />Поиск</Button>
            </div>
        </main>
    )
}