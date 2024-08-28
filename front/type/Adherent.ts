import { Abonnement } from "./Abonnement";

export type Adherent = {
    id: number
    password: string
    abonnement: Abonnement["nom"]
    prenom: string
    nom: string
    mail: string
    ville: string
    service: string
    token: string
};
