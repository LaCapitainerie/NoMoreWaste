"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import { Commercant } from "@/type/Commercant"
import Infos from "@/components/table/info"

export const columns: ColumnDef<Commercant>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
    },
    {
        accessorKey: "Nom",
    },
    {
        accessorKey: "Adresse",
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
                    type="le Commercant"
                    id={payment.id}
                    route="commercants"
                />
            )
        },
    },
]
