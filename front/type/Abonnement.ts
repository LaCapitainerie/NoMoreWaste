import { Perk } from "./Perks";

export interface Abonnement {
    Nom: typeof abos[number];
    PrixMois: number;
    PrixAn: number;
    Description: string;
    Perks: Perk[];
}

export const abos = ["Standard", "Premium", "VIP"];

type Perks = {
    [key in typeof abos[number]]: Abonnement;
};

export interface ResponseT {
    success: boolean;
    Perks: Perks;
}