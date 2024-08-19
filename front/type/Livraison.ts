import { stringOrDate } from "react-big-calendar";
import { Entrepot } from "./Entrepot";

export type Livraison = {
    title: string;

    id: number;
    Depart: stringOrDate;
    entrepot: Entrepot["id"];
    Arrivee: stringOrDate;
    Arrivelat: number;
    Arrivelong: number;
    Statut: string;

    pays: Entrepot["pays"];
    ville: Entrepot["ville"];
    latitude: Entrepot["latitude"];
    longitude: Entrepot["longitude"];
};