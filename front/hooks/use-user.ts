import { Adherent } from "@/type/Adherent";
import { useLocalStorage } from "./use-local-storage";

export function useUser() {
    return useLocalStorage<Adherent>(process.env.NEXT_PUBLIC_NOMOREWASTEUSER as string, {} as Adherent);
}