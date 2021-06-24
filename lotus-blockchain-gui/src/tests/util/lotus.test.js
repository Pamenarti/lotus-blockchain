const lotus = require("../../util/lotus");

describe("lotus", () => {
  it("converts number mojo to lotus", () => {
    const result = lotus.mojo_to_lotus(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to lotus", () => {
    const result = lotus.mojo_to_lotus("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to lotus string", () => {
    const result = lotus.mojo_to_lotus_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to lotus string", () => {
    const result = lotus.mojo_to_lotus_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number lotus to mojo", () => {
    const result = lotus.lotus_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string lotus to mojo", () => {
    const result = lotus.lotus_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = lotus.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = lotus.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = lotus.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = lotus.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = lotus.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = lotus.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
