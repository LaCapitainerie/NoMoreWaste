"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as React from "react"

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import InfoForm from "./modif"
import { lang } from "@/lib/utils"

interface DataTableProps<TData extends object, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    route: string
    langue: lang
    className?: string
    rowPerPageDefault?: number
}

export function DataTable<TData extends object, TValue>({
    columns,
    data,
    route,
    langue,
    className,
    rowPerPageDefault=10,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [rowPerPage, setRowPerPage] = React.useState(rowPerPageDefault)
    const [page, setPage] = React.useState(0)
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            pagination: {
                pageIndex: page,
                pageSize: rowPerPage,
            },
        },
    })

    const colonne = {
        "fr-Fr": "Colonnes",
        "en-US": "Columns"
    }
    const noresult = {
        "fr-Fr": "Aucun résultat.",
        "en-US": "No results."
    }
    const nouveau = {
        "fr-Fr": "Nouveau",
        "en-US": "New"
    }
    const ajouter = {
        "fr-Fr": "Ajouter un nouvel élément",
        "en-US": "Add a new element"
    }
    const terminer = {
        "fr-Fr": "Une fois terminé, cliquez sur le bouton 'Ajouter'.",
        "en-US": "Once finished, click on the 'Add' button."
    }
    const precedent = {
        "fr-Fr": "Précédent",
        "en-US": "Previous"
    }
    const suivant = {
        "fr-Fr": "Suivant",
        "en-US": "Next"
    }

    const colonnes = {
        "fr-Fr": {
            "id": "id",
            "Abonnement": "Abonnement",
            "Prenom": "Prenom",
            "Adresse": "Adresse",
            "Nom": "Nom",
            "Mail": "Mail",
            "Ville": "City",
            "extern": "extern",
            "action": "action"
        },
        "en-US": {
            "id": "id",
            "Abonnement": "Subscription",
            "Prenom": "First name",
            "Adresse": "Address",
            "Nom": "Last name",
            "Mail": "Email",
            "Ville": "City",
            "extern": "extern",
            "action": "action"
        }
    }

    const filteremails = {
        "fr-Fr": "Filtrer les emails...",
        "en-US": "Filter emails..."
    }

    return (
        <div className={className}>
            <div className="flex items-center py-4">
                <Input
                    placeholder={filteremails[langue]}
                    value={(table.getColumn("Mail")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("Mail")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            {colonne[langue]}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value: any) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    {noresult[langue]}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between space-x-2 py-4">
                <Dialog>
                    <DialogTrigger><Button>{nouveau[langue]}</Button></DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>{ajouter[langue]}</DialogTitle>
                            <DialogDescription>
                                {terminer[langue]}
                            </DialogDescription>
                        </DialogHeader>
                        
                        {
                            data.length > 0 &&
                            <InfoForm values={Object.fromEntries(Object.keys(data[0]).filter(v => !v.includes("extern")).map((key) => {
                                return [key, ""]
                            }))} route={route} type={""} method={"POST"} language={langue}/>
                        }
                    </DialogContent>
                </Dialog>
                

                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(page - 1)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {precedent[langue]}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(page + 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {suivant[langue]}
                    </Button>
                </div>
            </div>
            
        </div>
    )
}