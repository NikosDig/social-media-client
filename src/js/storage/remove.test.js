import { remove } from "./remove";

// Mock the localStorage methods
beforeEach(() => {
  const localStorageMock = {
    removeItem: jest.fn(),
  };
  global.localStorage = localStorageMock;
});

// Clean up the localStorage mock after the tests
afterEach(() => {
  global.localStorage = undefined;
});

test("remove function removes an item from localStorage", () => {
  const key = "testKey";

  // Call the remove function
  remove(key);

  // Check if removeItem was called with the expected key
  expect(localStorage.removeItem).toHaveBeenCalledWith(key);
});
