import { Abonnement } from "./Abonnement";

export type Adherent = {
    id: number
    Password: string
    Abonnement: Abonnement["Nom"]
    Prenom: string
    Nom: string
    Mail: string
    Ville: string
    Service: string
    token: string
};
