import PanelLayout from "@/components/admin-panel/admin-panel-layout";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Group } from "@/lib/menu-list";
import { Link } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Panel | Adhérent",
    description: "Panel Adhérent",
};

export const adherent_panel_menuListValue = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/dashboard",
                label: "Accueil",
                active: false,
                icon: "Home",
                submenus: []
            }
        ]
    },
    {
        groupLabel: "Gestion des Commercants",
        menus: [
            {
                href: "/commercant",
                label: "Commercants",
                active: false,
                icon: "Store",
                submenus: [
                    {
                        href: "/adhesions/Commercants",
                        label: "Liste des Commerçants",
                        active: false
                    },
                    {
                        href: "/adhesions/ajouter",
                        label: "Ajouter un Commerçant",
                        active: false
                    },
                    {
                        href: "/adhesions/détails",
                        label: "Détails du Commerçant",
                        active: false
                    }
                ]
            }
        ]
    },
    {
        groupLabel: "Gestion des Collectes",
        menus: [
            {
                href: "/collectes",
                label: "Collectes",
                active: false,
                icon: "Truck",
                submenus: [
                    {
                        href: "/collectes/calendrier",
                        label: "Calendrier des Collectes",
                        active: false
                    },
                    {
                        href: "/collectes/planifier",
                        label: "Planifier une Nouvelle Collecte",
                        active: false
                    },
                    {
                        href: "/collectes/tableau",
                        label: "Tableau des Collectes",
                        active: false
                    },
                    {
                        href: "/collectes/suivi",
                        label: "Suivi en Temps Réel",
                        active: false
                    }
                ]
            }
        ]
    },
    {
        groupLabel: "Gestion des Stocks",
        menus: [
            {
                href: "/stocks",
                label: "Stocks",
                active: false,
                icon: "Box",
                submenus: [
                    {
                        href: "/stocks/tableau",
                        label: "Tableau des Stocks",
                        active: false
                    },
                    {
                        href: "/stocks/ajouter",
                        label: "Ajouter un Produit",
                        active: false
                    },
                    {
                        href: "/stocks/alerte",
                        label: "Alerte Stock Faible",
                        active: false
                    }
                ]
            }
        ]
    },
    {
        groupLabel: "Gestion des Tournées de Distribution",
        menus: [
            {
                href: "/tournées",
                label: "Tournées",
                active: false,
                icon: "Map",
                submenus: [
                    {
                        href: "/tournées/calendrier",
                        label: "Calendrier des Tournées",
                        active: false
                    },
                    {
                        href: "/tournées/planifier",
                        label: "Planifier une Nouvelle Tournée",
                        active: false
                    },
                    {
                        href: "/tournées/tableau",
                        label: "Tableau des Tournées",
                        active: false
                    },
                    {
                        href: "/tournées/suivi",
                        label: "Suivi en Temps Réel",
                        active: false
                    }
                ]
            }
        ]
    },
    {
        groupLabel: "Suivi des Bénévoles",
        menus: [
            {
                href: "/bénévoles",
                label: "Bénévoles",
                active: false,
                icon: "Users",
                submenus: [
                    {
                        href: "/bénévoles/tableau",
                        label: "Tableau des Bénévoles",
                        active: false
                    },
                    {
                        href: "/bénévoles/ajouter",
                        label: "Ajouter un Bénévole",
                        active: false
                    },
                    {
                        href: "/bénévoles/détails",
                        label: "Détails du Bénévole",
                        active: false
                    }
                ]
            }
        ]
    },
    {
        groupLabel: "Gestion des Services",
        menus: [
            {
                href: "/services",
                label: "Services",
                active: false,
                icon: "Tools",
                submenus: [
                    {
                        href: "/services/tableau",
                        label: "Tableau des Services",
                        active: false
                    },
                    {
                        href: "/services/ajouter",
                        label: "Ajouter un Service",
                        active: false
                    },
                    {
                        href: "/services/calendrier",
                        label: "Calendrier des Services",
                        active: false
                    },
                    {
                        href: "/services/inscriptions",
                        label: "Inscriptions aux Services",
                        active: false
                    }
                ]
            }
        ]
    },
    {
        groupLabel: "Header",
        menus: [
            {
                href: "/recherche",
                label: "Recherche globale",
                active: false,
                icon: "Search",
                submenus: []
            },
            {
                href: "/notifications",
                label: "Notifications",
                active: false,
                icon: "Bell",
                submenus: []
            },
            {
                href: "/profil",
                label: "Profil utilisateur",
                active: false,
                icon: "User",
                submenus: [
                    {
                        href: "/profil/déconnexion",
                        label: "Déconnexion",
                        active: false
                    },
                    {
                        href: "/profil/paramètres",
                        label: "Paramètres",
                        active: false
                    }
                ]
            }
        ]
    }
] as Group[];

export default function DemoLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <PanelLayout menuListValue={adherent_panel_menuListValue}>
            {children}
        </PanelLayout>
    );
}