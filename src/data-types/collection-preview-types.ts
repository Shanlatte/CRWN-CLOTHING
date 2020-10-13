
// Props
export interface ICollectionPreviewProps {
    title: string;
    items: CollectionItem[];
    id: number;
    routeName: string;
}
export interface ICollectionItemProps {
    item: CollectionItem;
}


// Types
interface CollectionItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface ICartItemProps extends CollectionItem {
    quantity: number
}
