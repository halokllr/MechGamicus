export default function PilotCard({ pilot }: any) {
  return (
    <div className="panel">
      <h2 style={{ color: "var(--primary)", marginBottom: "1rem" }}>
        PILOT STATUS
      </h2>

      <p className="mono">
        <strong>ID:</strong> {pilot.pilot_id}
      </p>

      <p>
        <strong>BALANCE:</strong>{" "}
        <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
          ${pilot.balance}
        </span>
      </p>

      <p className="mono">
        <strong>INITIALIZED:</strong> {pilot.created_at}
      </p>
    </div>
  );
}
