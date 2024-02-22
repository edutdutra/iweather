import {getNextDays} from "@utils/getNextDays";

describe("getNextDays", () => {
    test("should be return the next five day", () => {
        const days = getNextDays();

        expect(days.length).toBe(5);
    });
})

