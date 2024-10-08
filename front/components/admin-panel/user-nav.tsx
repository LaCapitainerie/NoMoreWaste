"use client";

import Link from "next/link";
import { LayoutGrid, LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLangContext } from "@/hooks/lang-provider";
import { useUserContext } from "@/hooks/user-provider";

export function UserNav() {

  const language = useLangContext();
  // const account = useUserContext();  

  return (
    <Avatar className="h-8 w-8">
      <AvatarFallback className="bg-transparent">
        HA
        {/* {account.prenom[0]}{account.nom[0]} */}
      </AvatarFallback>
    </Avatar>
    // <DropdownMenu>
    //   <TooltipProvider disableHoverableContent>
    //     <Tooltip delayDuration={100}>
    //       <TooltipTrigger asChild>
    //         <DropdownMenuTrigger asChild>
    //           <Button
    //             variant="outline"
    //             className="relative h-8 w-8 rounded-full"
    //           >
    //             <Avatar className="h-8 w-8">
    //               <AvatarFallback className="bg-transparent">
    //                 HA
    //                 {/* {account.prenom[0]}{account.nom[0]} */}
    //               </AvatarFallback>
    //             </Avatar>
    //           </Button>
    //         </DropdownMenuTrigger>
    //       </TooltipTrigger>
    //       <TooltipContent side="bottom">
    //         <p>
    //           {
    //             {
    //               "fr-Fr": "Mon compte",
    //               "en-US": "My account"
    //             }[language]
    //           }
    //         </p>
    //       </TooltipContent>
    //     </Tooltip>
    //   </TooltipProvider>

    //   <DropdownMenuContent className="w-56" align="end" forceMount>
    //     <DropdownMenuLabel className="font-normal">
    //       <div className="flex flex-col space-y-1">
    //         <p className="text-sm font-medium leading-none">
    //           {account.prenom} {account.nom}
    //         </p>
    //         <p className="text-xs leading-none text-muted-foreground">
    //           {
    //             {
    //               "fr-Fr": "Administrateur",
    //               "en-US": "Administrator"
    //             }[language]
    //           }
    //         </p>
    //       </div>
    //     </DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem className="hover:cursor-pointer" asChild>
    //         <Link href="/" className="flex items-center">
    //           <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
    //           {
    //             {
    //               "fr-Fr": "Tableau de bord",
    //               "en-US": "Dashboard"
    //             }[language]
    //           }
    //         </Link>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem className="hover:cursor-pointer" asChild>
    //         <Link href="/account" className="flex items-center">
    //           <User className="w-4 h-4 mr-3 text-muted-foreground" />
    //           {
    //             {
    //               "fr-Fr": "Mon compte",
    //               "en-US": "My account"
    //             }[language]
    //           }
    //         </Link>
    //       </DropdownMenuItem>
    //     </DropdownMenuGroup>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem className="hover:cursor-pointer" onClick={() => {}}>
    //       <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
    //       {
    //         {
    //           "fr-Fr": "Déconnexion",
    //           "en-US": "Logout"
    //         }[language]
    //       }
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
