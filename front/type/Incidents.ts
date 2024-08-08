export type Incidents = {
    id: string;
    titre: string;
    statut: string;
    tag: "Connexion" | "Livraison" | "Paiement" | "Autre";
    priority: string;
}