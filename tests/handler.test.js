import * as handler from "../src/handler";

describe("hello", () => {
  afterAll(() => {
    delete process.env.REPLY_MSG;
  });

  it("replies with 200 and a string in body when request succeeds", async () => {
    const event = { queryStringParameters: {} };
    const context = "context";

    const response = await handler.hello(event, context);

    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  });

  it("replies with message defined in env var REPLY_MSG", async () => {
    const event = { queryStringParameters: {} };
    const context = "context";
    process.env.REPLY_MSG = "env test message";

    const response = await handler.hello(event, context);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toContain("env test message");
  });

  it("replies with 500 and an error when request fails", async () => {
    const event = { queryStringParameters: { fail: "true" } };
    const context = "context";

    await expect(handler.hello(event, context)).rejects.toEqual(
      new Error("[500] Delayed failure")
    );
  });
});
