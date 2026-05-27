import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", height: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        
        {/* Top bar */}
        <header
          style={{
            padding: "0.75rem 1.5rem",
            borderBottom: "1px solid var(--border)",
            background: "var(--panel)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "var(--primary)" }}>
            // DASHBOARD MODULE
          </span>

          {/* BACK BUTTON */}
          <a href="/" className="menuItem">
            {"<"} RETURN
          </a>
        </header>

        <div style={{ padding: "2rem" }}>{children}</div>
      </div>
    </div>
  );
}