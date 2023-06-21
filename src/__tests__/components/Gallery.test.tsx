import {render} from "@testing-library/react";
import Gallery from "../../components/Gallery";
import {Item} from "../../models";

jest.mock("../../components/ItemCard", () => (props: any) => <div>{props.item.name + props.item.id}</div>)

describe("Gallery Tests", () => {
    test("Snapshot", () => {

        const testItems: Item[] = [{id: "1", name: "item-1"}, {id: "2", name: "item-2"}]

        const view = render(<Gallery items={testItems}/>)

        expect(view.asFragment()).toMatchSnapshot()
    })
})
