const login = require("./login");

test("login đúng tài khoản và mật khẩu", () => {
    expect(login("admin", "123")).toBe(true);
});

test("login sai mật khẩu", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("login sai tài khoản", () => {
    expect(login("user", "123")).toBe(false);
});
