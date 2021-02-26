/**
 * Parse given Google Calendar Events DOM innerText
 * See {{TestCase}} for examples
 * @param {*} str
 */
const parseGoogleCalEvents = (str) => {
  // https://regex101.com/r/08IG6t/1/
  const GoogleCalRe = /^([\w:]+)\sto\s([\w:]+),\s([^,]*),[^,]*,\s([^,]*),\s[^,]*,\s(.*)$/i;

  // const [, startTime, endTime, title, attending, date] = GoogleCalRe.exec(str);
  // return { startTime, endTime, title, attending, date };
  const match = GoogleCalRe.exec(str);
  if (match === null) {
    console.log(`extractInfo failed for: ${str}`);
    return [str];
  }
  return match;
};

const TestCases = [
  "3:35pm to 4pm, Penn & Teller, Calendar: Some Name, Accepted, No location, February 01, 2021",
  "9:2am to 10am, #All hands: with Ameya, Calendar: Name, Needs RSVP, No location, February 01, 1991",
  "9am to 10am, Coffee with Ameya, Calendar: Name, Needs RSVP, No location, February 01, 1991"
];

it("parseGoogleCalEvents should extract time", () => {
  expect(parseGoogleCalEvents(TestCases[0])[1]).toBe("3:35pm");
});
