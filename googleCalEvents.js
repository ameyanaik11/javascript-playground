/**
 * Snippet to extract Google Calendar Events as CSV
 */
const googleCalEvent = () => {
  a = $('div[role="button"] > div:contains("Calendar:")');
  b = a.map((i, item) => item.innerText).get();
  c = b.map((desc) => parseGoogleCalEvents(desc));
  d = jsonToCSV(c);
  copy(d);
};
