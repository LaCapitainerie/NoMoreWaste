export interface Entrepot {
    id: number;
    pays: string;
    ville: string;
    latitude: number;
    longitude: number;


    // name: string;
    // address: string;
    // capacity: number;
    // available: number;
    // color: string;
}

export interface Marker {
    lat: number;
    lng: number;
    color: string;
    label: string;
}

export interface Locations {
    latitude: number;
    longitude: number;
}