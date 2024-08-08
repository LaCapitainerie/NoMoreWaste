"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/table/column-header"
import Infos from "@/components/table/info"
import { Incidents } from "@/type/Incidents"

export const columns: ColumnDef<Incidents>[] = [
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
        accessorKey: "Titre",
    },
    {
        accessorKey: "Statut",
        header: ({ column }) => <DataTableColumnHeader column={column} title={"Statut"} />,
    },
    {
        accessorKey: "Tag",
    },
    {
        accessorKey: "Priority",
        header: ({ column }) => <DataTableColumnHeader column={column} title={"Priority"} />,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <Infos
                    values={payment}
                    type="l'Incident"
                    id={payment.id}
                    route="incidents"
                />
            )
        },
    },
]
