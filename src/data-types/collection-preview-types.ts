export interface ICollectionPreviewProps {
    title: string;
    items: ICollectionItem[];
    id: number;
    routeName: string;
}

export interface ICollectionItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number
}