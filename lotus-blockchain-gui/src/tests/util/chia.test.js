const lotus = require("../../util/lotus");

describe("lotus", () => {
  it("converts number graviton to lotus", () => {
    const result = lotus.graviton_to_lotus(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string graviton to lotus", () => {
    const result = lotus.graviton_to_lotus("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number graviton to lotus string", () => {
    const result = lotus.graviton_to_lotus_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string graviton to lotus string", () => {
    const result = lotus.graviton_to_lotus_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number lotus to graviton", () => {
    const result = lotus.lotus_to_graviton(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string lotus to graviton", () => {
    const result = lotus.lotus_to_graviton("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number graviton to colouredcoin", () => {
    const result = lotus.graviton_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string graviton to colouredcoin", () => {
    const result = lotus.graviton_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number graviton to colouredcoin string", () => {
    const result = lotus.graviton_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string graviton to colouredcoin string", () => {
    const result = lotus.graviton_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to graviton", () => {
    const result = lotus.colouredcoin_to_graviton(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to graviton", () => {
    const result = lotus.colouredcoin_to_graviton("1000");

    expect(result).toBe(1000000);
  });
});
