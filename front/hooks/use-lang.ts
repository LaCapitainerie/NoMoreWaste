import { lang } from "@/lib/utils";
import { useLocalStorage } from "./use-local-storage";

export function useLang() {
    return useLocalStorage<lang>("theme", "fr-Fr");
}