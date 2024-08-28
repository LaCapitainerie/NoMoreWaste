import { Abonnement } from "./Abonnement";

export interface Perk {
    id: string;
    nom: string;
    abonnement: Abonnement["nom"];
}