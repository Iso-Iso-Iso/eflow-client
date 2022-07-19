export type GalleryItem = { image: string };

export interface Product {
    title: string;
    description: string;
    id: number;
    price: number;
    quantity: number;
    gallery: GalleryItem[];
}

export interface ProductGetResponse {
    links: {};
    meta: {};
    products: Product[];
}

export interface ProductSliderProps {
    gallery: GalleryItem[];
}
