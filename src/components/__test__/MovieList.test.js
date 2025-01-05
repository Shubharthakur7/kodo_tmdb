import { MovieList } from "../MovieList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {} from "../../features/movies/moviesApi"

jest.mock("../../features/movies/moviesApi", () => ({
    useFetchMoviesQuery: jest.fn(() => {
        const data = [];
        const isFetching = jest.fn();
        const error = {};
        return {
            data, isFetching, error
        }
    }),
    useFetchDefaultMoviesQuery: jest.fn(() => {
        const data = [];
        const isFetching = jest.fn();
        const error = {};
        return {
            data, isFetching, error
        }
    })
}))

describe("MovieList.js", () => {
    let tree, searchQuery;
    beforeEach(() => {
        searchQuery = "shubham";
        tree = render(
            <MovieList searchQuery={searchQuery} />
        )
    })
    it(" Should render without any errors", async() => {
        const { asFragment } = tree;
        expect(asFragment()).toMatchSnapshot();
    })
})