var sinon = require("sinon")
const ago = require("../ago")()

test("getDateDifferenceInSeconds returns 1 second if difference between dates is 1 second", () => {
    let date1 = new Date("2022-10-19T12:58:39.480Z")
    let date2 = new Date("2022-10-19T12:58:40.480Z")

    let difference = ago.getDateDifferenceInSeconds(date1, date2)
    expect(difference).toBe(1)
    

    let difference2 = ago.getDateDifferenceInSeconds(date2, date1)
    expect(difference2).toBe(1)
})

test("getDateDifferenceInSeconds returns 1 second if difference between dates is 1.001 seconds", () => {
    let date1 = new Date("2022-10-19T12:58:39.480Z")
    let date2 = new Date("2022-10-19T12:58:40.481Z")

    let difference = ago.getDateDifferenceInSeconds(date1, date2)
    expect(difference).toBe(1)
})

test("getString returns '2 seconds' if the two dates are 2 seconds apart", () => {
    let date1 = new Date("2022-10-19T12:58:39.480Z")
    let date2 = new Date("2022-10-19T12:58:41.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("2 seconds ago")
})

test("getString returns '1 second' if the two dates are 1 second apart", () => {
    let date1 = new Date("2022-10-19T12:58:39.480Z")
    let date2 = new Date("2022-10-19T12:58:40.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("1 second ago")
})

test("getString returns '2 minutes' if the two dates are 2 minutes apart", () => {
    let date1 = new Date("2022-10-19T12:58:39.480Z")
    let date2 = new Date("2022-10-19T12:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("2 minutes ago")
})

test("getString returns '1 minutes' if the two dates are 1 minutes apart", () => {
    let date1 = new Date("2022-10-19T12:57:39.480Z")
    let date2 = new Date("2022-10-19T12:58:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("1 minute ago")
})

test("getString returns '2 minutes' if the two dates are 2 minutes, 3 seconds apart", () => {
    let date1 = new Date("2022-10-19T12:58:42.480Z")
    let date2 = new Date("2022-10-19T12:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("2 minutes ago")
})

test("getString returns '1 minute' if the two dates are 1 minute, 3 seconds apart", () => {
    let date1 = new Date("2022-10-19T12:58:42.480Z")
    let date2 = new Date("2022-10-19T12:57:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("1 minute ago")
})

test("getString returns '2 hours' if the two dates are 2 hours apart", () => {
    let date1 = new Date("2022-10-19T12:56:39.480Z")
    let date2 = new Date("2022-10-19T14:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("2 hours ago")
})

test("getString returns '1 hour' if the two dates are 1 hour apart", () => {
    let date1 = new Date("2022-10-19T12:56:39.480Z")
    let date2 = new Date("2022-10-19T13:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("1 hour ago")
})

test("getString returns '2 hours' if the two dates are 2 hours, 2 minutes, 30 seconds apart", () => {
    let date1 = new Date("2022-10-19T12:56:39.480Z")
    let date2 = new Date("2022-10-19T14:58:49.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("2 hours ago")
})

test("getString returns '3 days' if the two dates are 3 days apart", () => {
    let date1 = new Date("2022-10-19T12:56:39.480Z")
    let date2 = new Date("2022-10-22T12:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("3 days ago")
})

test("getString returns '1 day' if the two dates are 1 day apart", () => {
    let date1 = new Date("2022-10-19T12:56:39.480Z")
    let date2 = new Date("2022-10-20T12:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("1 day ago")
})

test("getString returns '1 month ago' if the two dates are 1 month apart", () => {
    let date1 = new Date("2022-10-19T12:56:39.480Z")
    let date2 = new Date("2022-11-19T12:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("1 month ago")
})

test("getString returns '4 months ago' if the two dates are 4 months apart", () => {
    let date1 = new Date("2022-03-19T12:56:39.480Z")
    let date2 = new Date("2022-07-19T12:56:39.481Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("4 months ago")
})

test("getString returns '11 months ago' if the two dates are 4 months apart", () => {
    let date1 = new Date("2022-03-19T12:56:39.480Z")
    let date2 = new Date("2023-02-19T12:56:39.481Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("11 months ago")
})

test("getString returns '1 year ago' if the two dates are 1 year apart", () => {
    let date1 = new Date("2022-03-19T12:56:39.480Z")
    let date2 = new Date("2023-03-19T12:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("1 year ago")
})

test("getString returns '1 year ago' if the two dates are 1 year apart", () => {
    let date1 = new Date("2022-03-19T12:56:39.480Z")
    let date2 = new Date("2028-03-19T12:56:39.480Z")

    let string = ago.getString(date1, date2)
    expect(string).toBe("6 years ago")
})

test("getString throws error if one date is given and is after the current date", () => {
    let currentDateFake = new Date("2022-10-20T13:19:15.689Z")
    let stub = sinon.stub(Date, 'now').returns(currentDateFake)

    let dateAfterCurrent = new Date("2022-10-22T13:19:15.689Z")

    expect(() => ago.getString(dateAfterCurrent)).toThrowError()
    stub.restore()
})

test("getString does not throw error if one date is given and is before the current date", () => {
    let currentDateFake = new Date("2022-10-20T13:19:15.689Z")
    let stub = sinon.stub(Date, 'now').returns(currentDateFake)

    let dateBeforeCurrent = new Date("2022-10-19T13:19:15.689Z")

    expect(() => ago.getString(dateBeforeCurrent)).not.toThrowError()
    stub.restore()
})