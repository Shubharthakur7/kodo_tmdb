import { Searchbar } from "../SearchBar";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";


describe("Searchbar.js", () => {
    let tree, onSearch, handleSearch;
    beforeEach(() => {
        onSearch = jest.fn();
        handleSearch= jest.fn();
        tree = render(
            <Searchbar onSearch={onSearch} />
        )
    })
    it(" Should render without any errors", async() => {
        const { asFragment } = tree;
        expect(asFragment()).toMatchSnapshot();
    })

    it("handle search should called on click of search button", async()=> {
        const searchBtn = screen.getByTestId("search");
        const user = userEvent.setup();
        user.click(searchBtn);
        waitFor(() => {
            expect(handleSearch).tobeCalled();
        });
    } )
})