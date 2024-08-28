import { Adherent } from "./Adherent"

export type Commercant = {
    id: number
    nom: string
    adresse: string
    referent: string

    extern_Mail: Adherent['mail']
    extern_Ville: Adherent['ville']
}