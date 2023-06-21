import {useState} from "react";

type AddItemProps = {
    addItem: (name:string) => void
}

export default function AddItem(props: AddItemProps) {

    const [name, setName] = useState<string>("")

    return (
        <>
            <input placeholder={"Name"} value={name} onChange={(event) => {setName(event.target.value)}}/>
            <button onClick={() => {props.addItem(name)}}>Save</button>
        </>
    )
}
