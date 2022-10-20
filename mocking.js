function rollTheDice(){
    return Math.floor(Math.random() * 6 + 1)
}

test("rollTheDice works", () => {
    let roll = rollTheDice()
    expect(roll).ToBe(1)
})