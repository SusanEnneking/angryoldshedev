import { renderHook } from "@testing-library/react";
import "whatwg-fetch";
import useBlogPosts from "../app/hooks/useBlogPosts";

describe("useBlogPosts", () => {
    beforeAll(() => {
        global.fetch = fetch;
    });
    it("should return the blogPosts and intro", async () => {
        const { result } = renderHook(() => useBlogPosts());
        const { blogPosts, intro} = result.current;

        expect(blogPosts).toStrictEqual([]);
        expect(intro).toStrictEqual({});
    });
});