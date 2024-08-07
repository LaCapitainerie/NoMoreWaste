import { Adherent } from "./Adherent"

export type Commercant = {
    id: number
    Nom: string
    Adresse: string
    Referent: string

    extern_Mail: Adherent['Mail']
    extern_Ville: Adherent['Ville']
}