export type Product = {
    "id":number;
    "name":string;
    "price":number;
    "imageUri":string;
    "description":string;
}

export type OrderLocationData= {
    latitude: number;
    longitude: number;
    address: string;
}

type PorductId ={
    id: number
}

export type OrderPayload ={
    products : PorductId[];
} & OrderLocationData;

