import { renderHook } from "@testing-library/react";
import "whatwg-fetch";
import useSections  from "../app/hooks/useSections";

describe("useSections", () => {
    beforeAll(() => {
        global.fetch = fetch;
    });
    it("should return the sections", async () => {
        const { result } = renderHook(() => useSections());
        const { sections } = result.current;

        expect(sections).toBeUndefined();
    });
});