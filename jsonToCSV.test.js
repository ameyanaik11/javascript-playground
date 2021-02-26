/**
 * Convert given string[][] => CSV
 * To make it easy to import in Google Sheets
 * @param {*} jsonArrayOfArray
 */
const jsonToCSV = (jsonArrayOfArray) => {
  return jsonArrayOfArray
    .filter((x) => x !== null)
    .map((jsonArray) => jsonArray.join("\t"))
    .join("\n");
};

it("jsonToCSV should seperate with tab; and newline", () => {
  expect(
    jsonToCSV([
      [1, 2, 3],
      ["one", "two", "three"]
    ])
  ).toBe(
    `
1\t2\t3
one\ttwo\tthree
    `.trim()
  );
});

it("jsonToCSV should ignore null values", () => {
  expect(jsonToCSV([null, [1, 2], null])).toBe("1\t2");
});
