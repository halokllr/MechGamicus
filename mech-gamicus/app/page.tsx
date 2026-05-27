import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase
    .from("pilot_db")
    .select("*");

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <main>
      <h1>Pilot List</h1>

      {data?.map((pilot) => (
        <div key={pilot.pilot_id} style={{ marginBottom: "1rem" }}>
          <div><strong>ID:</strong> {pilot.pilot_id}</div>
          <div><strong>Balance:</strong> {pilot.balance}</div>
          <div><strong>Created:</strong> {pilot.created_at}</div>
        </div>
      ))}
    </main>
  );
}