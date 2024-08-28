"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import Infos from "@/components/table/info"
import { lang } from "@/lib/utils"
import { Stock } from "@/type/Stock"

export function getColumns(langue: lang): ColumnDef<Stock>[] {



    return [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label={
                        table.getIsAllPageRowsSelected()
                            ? {
                                "fr-Fr": "Désélectionner toutes les lignes",
                                "en-US": "Deselect all rows",
                            }[langue]
                            : {
                                "fr-Fr": "Sélectionner toutes les lignes",
                                "en-US": "Select all rows",
                            }[langue]
                    }
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                    aria-label={
                        {
                            "fr-Fr": "Sélectionner la ligne",
                            "en-US": "Select row",
                        }[langue]
                    }
                />
            ),
        },
        {
            accessorKey: "item",
            header: {
                "fr-Fr": "Article",
                "en-US": "Item",
            }[langue]
        },
        {
            accessorKey: "quantite",
            header: {
                "fr-Fr": "Quantité",
                "en-US": "Quantity",
            }[langue]
        },
        {
            accessorKey: "extern_id",
            header: {
                "fr-Fr": "Entrepôt",
                "en-US": "Warehouse",
            }[langue]
        },
        {
            accessorKey: "pays",
            header: {
                "fr-Fr": "Pays",
                "en-US": "Country",
            }[langue]
        },
        {
            accessorKey: "ville",
            header: {
                "fr-Fr": "Ville",
                "en-US": "City",
            }[langue]
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const payment = row.original
    
                return (
                    <Infos
                        values={payment}
                        type={{
                            "fr-Fr": "l'Incident",
                            "en-US": "Ticket",
                        }[langue]}
                        id={payment.id}
                        route="incidents"
                        language={langue}
                    />
                )
            },
        },
    ]
}


