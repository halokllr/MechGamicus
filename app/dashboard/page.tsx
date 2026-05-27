import { pilot } from "@/lib/mockData";
import PilotCard from "../components/PilotCard";

export default function Dashboard() {
  return (
    <div className="mainContent">
      
      <div className="panel">
        <PilotCard pilot={pilot} />
      </div>

      <div className="panel">
        <h2 style={{ color: "var(--primary)" }}>SYSTEM STATUS</h2>
        <p>Navigation: ONLINE</p>
        <p>Comms: ACTIVE</p>
        <p style={{ color: "var(--accent)" }}>Warnings: NONE</p>
      </div>

      <div className="panel">
        <h2 style={{ color: "var(--primary)" }}>ACTIVE FRAME</h2>
        <p>Frame: GUNDAM-TYPE</p>
        <p>Loadout: STANDARD</p>
      </div>

      <div className="panel panel-wide">
        <h2 style={{ color: "var(--primary)" }}>SYSTEM LOG</h2>
        <p className="mono">[12:01] LINK ESTABLISHED</p>
        <p className="mono">[12:03] PILOT AUTH VERIFIED</p>
        <p className="mono">[12:05] STANDBY MODE ACTIVE</p>
      </div>

    </div>
  );
}
