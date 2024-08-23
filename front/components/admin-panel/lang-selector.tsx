import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { useSetLangContext } from "@/hooks/lang-provider";
import { lang, langvalues } from "@/lib/utils";
import { toast } from "sonner";

export function LangSelector() {

    const setStoredMode = useSetLangContext();

    return (
        <Select onValueChange={v => setStoredMode(v as lang)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Langue" />
            </SelectTrigger>
            <SelectContent>
                {
                    Object.entries(langvalues).map(([pays, lang], idx) => (
                        <SelectGroup key={idx}>
                            <SelectLabel>{pays}</SelectLabel>
                            {
                                Object.entries(lang).map(([key, value]) => (
                                    <SelectItem key={key} value={key} onClick={_ => 
                                        {
                                            const toasttext = {
                                            "fr-Fr": "Langue changée en français",
                                            "en-US": "Language changed to English"
                                        }
                                        toast.success(toasttext[key as lang]);
                                    }}>{value}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    ))
                }
                
            </SelectContent>
        </Select>
    );
}
