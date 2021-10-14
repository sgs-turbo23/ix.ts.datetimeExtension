import datetimeUtil from "../src/datetimeUtil";

test("Get Yesterday", () => {
    expect(datetimeUtil.getYesterday(new Date("2000/01/02"))).toStrictEqual(new Date("2000/01/01"));
    expect(datetimeUtil.getYesterday(new Date("2000/01/01"))).toStrictEqual(new Date("1999/12/31"));
});

test("Add day", () => {
    expect(datetimeUtil.addDay(new Date("2000/01/01"), 31)).toStrictEqual(new Date("2000/02/01"));
    expect(datetimeUtil.addDay(new Date("2000/01/01"), -1)).toStrictEqual(new Date("1999/12/31"));
});

test("Make Date String", () => {
    expect(datetimeUtil.makeDateString(new Date("2000/01/01"))).toBe("2000/1/1");
});

test("Make Short Date String", () => {
    expect(datetimeUtil.makeShortDateString(new Date("2000/01/01"))).toBe("20000101");
});

test("Pad Left Zero", () => {
    expect(datetimeUtil.PadLeftZero("11")).toBe("11");
    expect(datetimeUtil.PadLeftZero("1")).toBe("01");
});