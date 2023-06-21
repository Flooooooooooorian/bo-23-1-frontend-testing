import {Item} from "../models";
import ItemCard from "./ItemCard";

type GalleryProps = {
    items: Item[]
}

export default function Gallery(props: GalleryProps) {


    return (
        <>
            <h1>Item-Gallery</h1>
            {props.items.map((item) => <ItemCard key={item.id} item={item}/>)}
        </>
    )
}
