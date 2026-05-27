export default function PilotCard({ pilot }: any) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1.5rem",
        borderRadius: "10px",
        maxWidth: "400px",
      }}
    >
      <h2>Pilot Profile</h2>
      <p><strong>ID:</strong> {pilot.pilot_id}</p>
      <p><strong>Balance:</strong> ${pilot.balance}</p>
      <p><strong>Created:</strong> {pilot.created_at}</p>
    </div>
  );
}