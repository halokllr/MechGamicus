export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        background: "var(--panel)",
        borderRight: "1px solid var(--border)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ color: "var(--primary)", fontWeight: "bold" }}>
        // SYSTEM
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <a href="/dashboard" className="navItem"> DASHBOARD</a>
        <a href="#" className="navItem"> PILOT</a>
        <a href="#" className="navItem"> VESSELS</a>
        <a href="#" className="navItem"> LOGS</a>
      </nav>

      {/* Bottom back button */}
      <div style={{ marginTop: "auto" }}>
        <a
          href="/"
          className="navItem"
          style={{ color: "var(--accent)" }}
        >
          {"<"} EXIT SYSTEM
        </a>
      </div>
    </aside>
  );
}