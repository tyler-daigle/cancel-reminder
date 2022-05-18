import User from "../types/User";

describe("User Class Test", () => {
  it("User object should be created correctly", () => {
    const user = new User("Tyler", 1);
    expect(user.username).toEqual("Tyler");
    expect(user.userId).toEqual(1);
  });
});