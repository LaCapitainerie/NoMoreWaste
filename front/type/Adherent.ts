import { Abonnement, abos } from "./Abonnement";

export type Adherent = {
    id: number
    Password: string
    Abonnement: Abonnement["Nom"]
    Prénom: string
    Nom: string
    Mail: string
    Ville: string
    Service: string
    token: string
};

export interface ResponseCustom<T> {
    success: boolean;
    result: T[];
}