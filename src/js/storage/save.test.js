import { save } from "./save";

// Mock the localStorage methods
beforeEach(() => {
  const localStorageMock = {
    setItem: jest.fn(),
  };
  global.localStorage = localStorageMock;
});

// Clean up the localStorage mock after the tests
afterEach(() => {
  global.localStorage = undefined;
});

test("save function stores the value in localStorage", () => {
  const key = "testKey";
  const value = { name: "John", age: 30 };

  // Call the save function
  save(key, value);

  // Check if setItem was called with the expected arguments
  expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
});
