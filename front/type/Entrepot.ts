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

export interface ResponseLocations {
    success: boolean;
    Locations: Locations[];
}