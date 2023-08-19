import { createBtlnkService } from "./index";

describe("Btlnk Service Functions", () => {
  const apiKey = "test-api-key";

  it("should create a new link", async () => {
    const api = createBtlnkService({ apiKey, isSSL: false });
    const result = await api.newLink({ url: "https://example.com" });
    expect(result).toBeDefined();
  });

  it("should fetch all links", async () => {
    const api = createBtlnkService({ apiKey, isSSL: false });
    const result = await api.fetchLinks({ page: 1 });
    expect(result).toBeDefined();
  });

  it("should fetch link reports", async () => {
    const api = createBtlnkService({ apiKey, isSSL: false });
    const result = await api.fetchLinkReport({ id: 123, page: 1 });
    expect(result).toBeDefined();
  });
});
