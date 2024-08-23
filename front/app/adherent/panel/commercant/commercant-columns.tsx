"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import Infos from "@/components/table/info"
import { lang } from "@/lib/utils"
import { Commercant } from "@/type/Commercant"

export function getColumns(langue: lang): ColumnDef<Commercant>[] {

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
            accessorKey: "Nom",
            header: {
                "fr-Fr": "Nom",
                "en-US": "Name",
            }[langue],
        },
        {
            accessorKey: "Adresse",
            header: {
                "fr-Fr": "Adresse",
                "en-US": "Address",
            }[langue],
        },
        {
            accessorKey: "Mail",
            cell: ({ row }) => {
                const value = row.original.extern_Mail
                return (
                    <a href={`mailto:${value}`} className="text-blue-500">
                        {value}
                    </a>
                )
            }
        },
        {
            accessorKey: "Ville",
            header: {
                "fr-Fr": "Ville",
                "en-US": "City",
            }[langue],
            cell: ({ row }) => {
                const value = row.original.extern_Ville
                return <span>{value}</span>
            }
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const payment = row.original

                return (
                    <Infos
                        values={payment}
                        type={
                            {
                                "fr-Fr": "le Commerçant",
                                "en-US": "the Merchant",
                            }[langue]
                        }
                        id={payment.id}
                        route="commercants"
                        language={langue}
                    />
                )
            },
        },
    ]
}