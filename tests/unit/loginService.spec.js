require("./mock-local-storage");

import loginService from "../../src/services/loginService";

describe("Test hasToken function", () => {
  it('Should return true if we have a token with key name "fake_token', () => {
    const token_key = "fake_token";
    const token = "fake_user_token";
    const from = "/";
    const next = jest.fn();
    localStorage.setItem(token_key, token);
    const hasToken = jest.fn(token_key).mockReturnValue(token);

    expect(typeof loginService).toBe("function");
    expect(hasToken(token_key)).toEqual("fake_user_token");
  });
});
