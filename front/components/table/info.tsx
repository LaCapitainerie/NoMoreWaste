import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import InfoForm from "./modif";
import { lang } from "@/lib/utils";

export default function Infos({values, type, id, route, language}: {values: any, type: string, id: any, route: string, language: lang}) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">
                        {
                            {
                                "fr-Fr": "Plus d'informations",
                                "en-US": "More informations",
                            }[language]
                        }
                    </span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(id.toString())}
                >
                    {
                        {
                            "fr-Fr": "Copier l'id unique",
                            "en-US": "Copy unique id",
                        }[language]
                    }
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={(e: { preventDefault: () => any; }) => e.preventDefault()}>
                    <Dialog>
                        <DialogTrigger>
                            {
                                {
                                    "fr-Fr": "Plus d'info",
                                    "en-US": "Plus",
                                }[language]
                            }
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>
                                    Information
                                    {
                                        {
                                            "fr-Fr": " sur ",
                                            "en-US": " on ",
                                        }[language]
                                    }
                                    {type}
                                </DialogTitle>
                                <DialogDescription>
                                    {
                                        {
                                            "fr-Fr": "Vous pouvez modifier les informations ci-dessous.",
                                            "en-US": "You can modify the informations below.",
                                        }[language]
                                    }
                                    {/* Une fois les modifications effectuées, cliquez sur le bouton `&quot;Enregistrer les modifications`&quot;. */}
                                </DialogDescription>
                            </DialogHeader>

                            <InfoForm values={values} route={route} type={type} method={"PUT"} language={language}/>
                        </DialogContent>
                    </Dialog>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}