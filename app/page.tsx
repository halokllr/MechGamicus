export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <h1 style={{ color: "var(--primary)" }}>
        // MECHGAMICUS SYSTEM
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <a href="/dashboard" className="menuItem">
          {">"} PILOT DASHBOARD
        </a>

        <a href="#" className="menuItem">
          {">"} VESSEL CONTROL
        </a>

        <a href="#" className="menuItem">
          {">"} MISSION DATA
        </a>

        <a href="#" className="menuItem">
          {">"} SYSTEM SETTINGS
        </a>
      </div>
    </main>
  );
}