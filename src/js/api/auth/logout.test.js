import { logout } from "./logout.js"; // Update the path to your logout function
import { remove } from "../../storage/index.js"; // Update the path to your remove function

jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout function", () => {
  it("should clear the token from local storage", () => {
    logout();

    // Ensure that the "remove" function is called with the "token" key
    expect(remove).toHaveBeenCalledWith("token");
  });

  it("should clear the profile from local storage", () => {
    logout();

    // Ensure that the "remove" function is called with the "profile" key
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
