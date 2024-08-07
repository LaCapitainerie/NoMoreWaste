import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import InfoForm from "./modif";

export default function Infos({values, type, id, route}: {values: any, type: string, id: any, route: string}) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(id.toString())}
                >
                    Copier l&apos;id unique
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={(e: { preventDefault: () => any; }) => e.preventDefault()}>
                    <Dialog>
                        <DialogTrigger>Plus d&apos;info</DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Information sur {type}</DialogTitle>
                                <DialogDescription>
                                    Une fois les modifications effectuées, cliquez sur le bouton `&quot;Enregistrer les modifications`&quot;.
                                </DialogDescription>
                            </DialogHeader>

                            <InfoForm values={values} route={route} type={type} method={"PUT"}/>
                        </DialogContent>
                    </Dialog>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}