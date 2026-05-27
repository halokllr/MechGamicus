import { pilot } from "@/lib/mockData";
import PilotCard from "./components/PilotCard";

export default function Home() {
  return (
    <main>
      <h1>Pilot Dashboard</h1>
      <PilotCard pilot={pilot} />
    </main>
  )
}