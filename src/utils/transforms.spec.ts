import { censorPhoneNo, signAtFormat } from "./transforms";

describe("censorPhoneNo", () => {
  it("should be censor phone number", () => {
    const result = censorPhoneNo("0934000780");
    expect(result).toBe("093-xxx-0780");
  });
});

describe("signAtFormat", () => {
  it("should be formatted data", () => {
    const result = signAtFormat(new Date("2023-10-12T14:23:00Z"))
    expect(result).toBe("12 Oct 2023 21:23")
  })
  it('should be result Invalid Date', () => {
    const result = signAtFormat(new Date("1111-22-33T44:55:66Z"))
    expect(result).toBe("Invalid Date")
  })
})
