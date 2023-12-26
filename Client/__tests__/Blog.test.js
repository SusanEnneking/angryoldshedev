import { render, renderHook, screen } from "@testing-library/react";
import Blog from '../app/blog/Blog';
import '@testing-library/jest-dom';
import "whatwg-fetch";
import useBlogPosts  from '../app/hooks/useBlogPosts'

describe("useBlogPosts", () => {
    beforeAll(() => {
      global.fetch = fetch;
    });


//test block
    test("Blog renders correctly", async () => {
        const { result } = renderHook(() => useBlogPosts());
        const { blogPosts, intro } = result.current;
        expect(blogPosts).toStrictEqual([]);
        expect(intro).toStrictEqual({});

        // render the component on virtual dom
        render(<Blog />);
        //select the elements you want to interact with
        const header = screen.queryByTestId("header");
        const introduction = screen.queryByTestId("introduction");
        const featured = screen.queryByTestId("featured");
        const firehose = screen.queryByTestId("firehose");
        const sidebar = screen.queryByTestId("sidebar");
        const footer = screen.queryByTestId("footer");
        //assert the expected result
        expect(header).toBeInTheDocument;
        expect(introduction).toBeInTheDocument;
        expect(featured).toBeInTheDocument;
        expect(firehose).toBeInTheDocument;
        expect(sidebar).toBeInTheDocument;
        expect(footer).toBeInTheDocument;
    })
});
