import { pilot } from "@/lib/mockData";

export default function Home() {
  return (
    <main>
      <h1>Pilot Dashboard</h1>

      <div style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "400px"
      }}>
        <h2>My Profile</h2>
        <p><strong>ID:</strong> {pilot.pilot_id}</p>
        <p><strong>Balance:</strong> {pilot.balance}</p>
        <p><strong>Created:</strong> {pilot.created_at}</p>
      </div>
    </main>
  )
}