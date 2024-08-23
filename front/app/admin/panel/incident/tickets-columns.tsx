"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/table/column-header"
import Infos from "@/components/table/info"
import { Incidents } from "@/type/Incidents"
import { lang } from "@/lib/utils"

export function getColumns(langue: lang): ColumnDef<Incidents>[] {



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
            accessorKey: "id",
        },
        {
            accessorKey: {
                "fr-Fr": "Titre",
                "en-US": "Title",
            }[langue],
        },
        {
            accessorKey: "Statut",
            header: ({ column }) => <DataTableColumnHeader column={column} title={"Statut"} />,
        },
        {
            accessorKey: "Tag",
        },
        {
            accessorKey: {
                "fr-Fr": "Priorité",
                "en-US": "Priority",
            }[langue],
            header: ({ column }) => <DataTableColumnHeader column={column} title={
                {
                    "fr-Fr": "Priorité",
                    "en-US": "Priority",
                }[langue]
            } />,
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


