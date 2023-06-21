import {fireEvent, render, screen} from "@testing-library/react";
import AddItem from "../../components/AddItem";

describe("AddItem Tests", () => {

    test("renders correctly", () => {
        //GIVEN
        const addItemFunction = () => {}

        //WHEN
        const view = render(<AddItem addItem={addItemFunction} />)

        //THEN
        expect(view.asFragment()).toMatchSnapshot()
    })

    test("add item", () => {
        //GIVEN
        const mockAddItem = jest.fn()

        //WHEN
        const view = render(<AddItem addItem={mockAddItem} />)

        //THEN
        expect(view.asFragment()).toMatchSnapshot()
        
        //WHEN
        fireEvent.input(screen.getByPlaceholderText("Name"), {target: {value: "test-input"}})

        //THEN
        expect(view.asFragment()).toMatchSnapshot()

        //WHEN
        fireEvent.click(screen.getByText("Save"))

        //THEN
        expect(view.asFragment()).toMatchSnapshot()

        expect(mockAddItem).toBeCalledWith("test-input")


    })
})
