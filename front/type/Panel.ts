import { Group } from "@/lib/menu-list";

export const adherent_panel_menuListValue = [
    {
        groupLabel: "",
        menus: [
            {
                href: "/adherent/panel",
                label: "Accueil",
                active: false,
                icon: "Home",
                submenus: []
            },
            {
                href: "/adherent/panel/commercant",
                label: "Commercants",
                active: false,
                icon: "Store",
                submenus: []
            },
            {
                href: "/adherent/panel/collecte",
                label: "Collecte",
                active: false,
                icon: "Truck",
                submenus: []
            },
            {
                href: "/adherent/panel/stock",
                label: "Stock",
                active: false,
                icon: "Box",
                submenus: []
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
] as Group[];

export const admin_panel_menuListValue = [
    {
        groupLabel: "Panel Admin",
        menus: [
            {
                href: "/admin/panel",
                label: "Dashboard",
                active: false,
                icon: "layout-panel-left",
                submenus: [
                    {
                        href: "/admin/panel/adherent",
                        label: "Gestion des adherents",
                        active: false
                    },
                    {
                        href: "/admin/panel/ticket",
                        label: "Gestion des incidents",
                        active: false
                    },
                ]
            }
        ]
    },
] as Group[];