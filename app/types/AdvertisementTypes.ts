type PostContact = {
    name: string;
    phone: string;
};

type PostCoordinates = {
    latitude: number;
    longitude: number;
};

export type AdvertisementTypes = {
    id: number;
    title: string;
    description: string;
    price: number;
    contact: PostContact;
    location: string;
    coordinates: PostCoordinates;
};