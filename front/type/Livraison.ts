import { stringOrDate } from "react-big-calendar";
import { Entrepot } from "./Entrepot";
import { Stock } from "./Stock";

export type Livraison = {
    title: string;

    id: number;
    depart: stringOrDate;
    entrepot: Entrepot["id"];
    arrivee: stringOrDate;
    arrivelat: number;
    arrivelong: number;
    statut: string;

    pays: Entrepot["pays"];
    ville: Entrepot["ville"];
    latitude: Entrepot["latitude"];
    longitude: Entrepot["longitude"];

    stocks: Stock[];
};