import datetimeUtil = require ("../src/datetimeUtil");

test("Get Yesterday", () => {
    expect(datetimeUtil.getYesterday(new Date("2000/01/02"))).toStrictEqual(new Date("2000/01/01"));
    expect(datetimeUtil.getYesterday(new Date("2000/01/01"))).toStrictEqual(new Date("1999/12/31"));
});

test("Make Date String", () => {
    expect(datetimeUtil.makeDateString(new Date("2000/01/01"))).toBe("2000/1/1");
});