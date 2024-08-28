import { Entrepot } from "./Entrepot";

export interface Stock {
    id: number;
    entrepot: number;
    item: string;
    quantite: number;

    removed: number;

    pays: Entrepot["pays"];
    ville: Entrepot["ville"];
    extern_id: Entrepot["id"];
}