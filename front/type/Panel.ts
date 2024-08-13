import { Group } from "@/lib/menu-list";
import { lang } from "@/lib/utils";

export const adherentPanelMenuListValue: { [key in lang]: Group[] } = {
    "fr-Fr": [
        {
            groupLabel: "",
            menus: [
                {
                    href: "/adherent/panel",
                    label: "Tableau de Bord",
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
                            label: "Ajouter un Stock",
                            active: false
                        },
                        {
                            href: "/stocks/alerte",
                            label: "Alerte Stock",
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
                            label: "Inscriptions",
                            active: false
                        }
                    ]
                }
            ]
        }
    ],
    "en-US": [
        {
            groupLabel: "",
            menus: [
                {
                    href: "/adherent/panel",
                    label: "Dashboard",
                    active: false,
                    icon: "Home",
                    submenus: []
                },
                {
                    href: "/adherent/panel/commercant",
                    label: "Merchants",
                    active: false,
                    icon: "Store",
                    submenus: []
                },
                {
                    href: "/adherent/panel/collecte",
                    label: "Collection",
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
            groupLabel: "Collection Management",
            menus: [
                {
                    href: "/collectes",
                    label: "Collections",
                    active: false,
                    icon: "Truck",
                    submenus: [
                        {
                            href: "/collectes/calendrier",
                            label: "Collection Calendar",
                            active: false
                        },
                        {
                            href: "/collectes/planifier",
                            label: "Schedule a New Collection",
                            active: false
                        },
                        {
                            href: "/collectes/tableau",
                            label: "Collection Table",
                            active: false
                        },
                        {
                            href: "/collectes/suivi",
                            label: "Real-time Monitoring",
                            active: false
                        }
                    ]
                }
            ]
        },
        {
            groupLabel: "Stock Management",
            menus: [
                {
                    href: "/stocks",
                    label: "Stocks",
                    active: false,
                    icon: "Box",
                    submenus: [
                        {
                            href: "/stocks/tableau",
                            label: "Stock Table",
                            active: false
                        },
                        {
                            href: "/stocks/ajouter",
                            label: "Add a Stock",
                            active: false
                        },
                        {
                            href: "/stocks/alerte",
                            label: "Stock Alert",
                            active: false
                        }
                    ]
                }
            ]
        },
        {
            groupLabel: "Service Management",
            menus: [
                {
                    href: "/tournées",
                    label: "Tours",
                    active: false,
                    icon: "Map",
                    submenus: [
                        {
                            href: "/tournées/calendrier",
                            label: "Tour Calendar",
                            active: false
                        },
                        {
                            href: "/tournées/planifier",
                            label: "Schedule a New Tour",
                            active: false
                        },
                        {
                            href: "/tournées/tableau",
                            label: "Tour Table",
                            active: false
                        },
                        {
                            href: "/tournées/suivi",
                            label: "Real-time Monitoring",
                            active: false
                        }
                    ]
                }
            ]
        },
        {
            groupLabel: "Service Management",
            menus: [
                {
                    href: "/services",
                    label: "Services",
                    active: false,
                    icon: "Tools",
                    submenus: [
                        {
                            href: "/services/tableau",
                            label: "Service Table",
                            active: false
                        },
                        {
                            href: "/services/ajouter",
                            label: "Add a Service",
                            active: false
                        },
                        {
                            href: "/services/calendrier",
                            label: "Service Calendar",
                            active: false
                        },
                        {
                            href: "/services/inscriptions",
                            label: "Registrations",
                            active: false
                        }
                    ]
                }
            ]
        }
    ]
};

export const adminPanelMenuListValue: { [key in lang]: Group[] } = {
    "fr-Fr": [
        {
            groupLabel: "Panel Admin",
            menus: [
                {
                    href: "/admin/panel",
                    label: "Tableau de Bord",
                    active: false,
                    icon: "layout-panel-left",
                    submenus: [
                        {
                            href: "/admin/panel/adherent",
                            label: "Adhérents",
                            active: false
                        },
                        {
                            href: "/admin/panel/ticket",
                            label: "Tickets",
                            active: false
                        }
                    ]
                }
            ]
        }
    ],
    "en-US": [
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
                            label: "Members",
                            active: false
                        },
                        {
                            href: "/admin/panel/ticket",
                            label: "Tickets",
                            active: false
                        }
                    ]
                }
            ]
        }
    ]
};