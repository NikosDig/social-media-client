import { login } from "./login.js"; // Update the path to your login function
import { apiPath } from "./../constants.js"; // Import apiPath from your application's constants
import { headers } from "./../headers.js"; // Import the headers function

// Mock the fetch function
global.fetch = jest.fn();

// Create a mock for localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

global.localStorage = localStorageMock;

describe("login function", () => {
  it("should fetch and store the token in local storage", async () => {
    const fakeAccessToken = "fakeAccessToken";
    const fakeProfile = { id: 1, username: "testuser" };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({ accessToken: fakeAccessToken, ...fakeProfile }),
    });

    // Mock that storage.load returns null initially for 'token'
    localStorageMock.getItem.mockReturnValue(null);

    // Call the login function
    const result = await login("test@example.com", "password");

    // Check that the fetch function was called with the correct arguments
    expect(global.fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email: "test@example.com", password: "password" }),
      headers: headers("application/json"),
    });

    // Check that the token and profile were stored in local storage
    expect(localStorageMock.getItem).toHaveBeenCalledWith("token"); // Ensure localStorage.getItem was called for 'token'
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(fakeAccessToken),
    );
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "profile",
      JSON.stringify(fakeProfile),
    );

    // Check that the function returns the expected result
    expect(result).toEqual(fakeProfile);
  });
});
