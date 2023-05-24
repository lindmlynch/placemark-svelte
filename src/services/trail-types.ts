export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id: string;
}

export interface LoggedInUser {
    email: string;
    token: string;
    _id: string;
}

export interface Placemark {
    name: string;
    trailType: string;
    length: number;
    _id: string;
    img: string;
}


export interface Trail {
    time: number;
    method: string;
    placemark: Placemark;
    user: LoggedInUser;
    lat: number;
    lng: number;
    _id: string;
}

export interface PlacemarkTrails {
    placemark: Placemark;
    trails: Trail[];
}
