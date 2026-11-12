const CALENDARS = [
  { id: "c1464df2bfaea1d5249df93cb4274a9bba639f2756ddd47e17adff8a25b7b0a9@group.calendar.google.com", color: "#F74902" },
  { id: "b35ee59ea57481145f8bbb0751ec28cac7410dd8bbafce9ad9fe6423bd1cf4a0@group.calendar.google.com", color: "#1D4F91" },
  { id: "935007a4235f8011dfe07889df548ddc10124b1307a9d9edf1e41e5625e80a1b@group.calendar.google.com", color: "#7B1FA2" },
];

const params = new URLSearchParams({ ctz: "America/Toronto", mode: "MONTH" });
CALENDARS.forEach((c) => {
  params.append("src", c.id);
  params.append("color", c.color);
});
const EMBED_URL = `https://calendar.google.com/calendar/embed?${params}`;

export default function App() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Flyers Organization Calendar</h1>
      <iframe
        src={EMBED_URL}
        title="Flyers organization calendar"
        style={{ border: 0, width: "100%", height: "80vh" }}
      />
    </main>
  );
}