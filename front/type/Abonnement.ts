import { Perk } from "./Perks";

export interface Abonnement {
    nom: typeof abos[number];
    prixmois: number;
    prixan: number;
    description: string;
    perks: Perk[];
}

export const abos = ["Standard", "Premium", "VIP"];

export type Perks = {
    [key in typeof abos[number]]: Abonnement;
};