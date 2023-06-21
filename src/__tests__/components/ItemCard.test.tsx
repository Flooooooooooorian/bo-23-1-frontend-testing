import {render} from "@testing-library/react";
import ItemCard from "../../components/ItemCard";
import {Item} from "../../models";


test("ItemCard renders correctly", () => {
    //GIVEN
    const testItem: Item = {id: "test-id", name: "test-name"}

    //WHEN
    const view = render(<ItemCard item={testItem}/>)

    //THEN
    expect(view.asFragment()).toMatchSnapshot()
})
