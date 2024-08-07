"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/table/column-header"
import { Adherent } from "@/type/Adherent"
import Infos from "@/components/table/info"

export const columns: ColumnDef<Adherent>[] = [
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
        accessorKey: "id",
    },
    {
        accessorKey: "Mail",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Mail" />
        ),
    },
    {
        accessorKey: "Prénom",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Prénom" />
        ),
    },
    {
        accessorKey: "Nom",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Nom" />
        ),
    },
    {
        accessorKey: "Abonnement",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Abonnement" />
        ),
        cell: ({ row }) => row.original.Abonnement || "Standard",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <Infos
                    values={payment}
                    type="l'Adherent"
                    id={payment.id}
                    route="adherents"
                />
            )
        },
    },
]
