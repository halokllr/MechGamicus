import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase
    .from("pilot_db")
    .select("*");

  return (
    <main>
      <h1>Test Supabase</h1>

      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}