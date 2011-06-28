load("src/myLib.js");

test("Adding numbers", function() {
    expect(3);
    ok(newAddition, "function exists");
    equals(newAddition(2, 2), 4, "2 + 2 = 4");
    equals(newAddition(100, 0), 100, "zero is zero");
});

