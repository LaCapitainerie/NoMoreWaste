import { Abonnement } from "./Abonnement";

export interface Perk {
    Id: string;
    Nom: string;
    Abonnement: Abonnement["Nom"];
}