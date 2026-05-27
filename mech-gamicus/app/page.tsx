"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [pilot, setPilot] = useState<any>(null);

  useEffect(() => {
    const loadPilot = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("pilot_db")
        .select("*")
        .eq("pilot_id", user.id)   // ✅ your schema
        .single();

      if (!error) setPilot(data);
    };

    loadPilot();
  }, []);

  // Logout Function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  if (!pilot) return <div>Loading...</div>;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>My Pilot Profile</h1>

      <p><strong>Pilot ID:</strong> {pilot.pilot_id}</p>
      <p><strong>Balance:</strong> {pilot.balance}</p>
      <p><strong>Created:</strong> {pilot.created_at}</p>

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>
    </main>
  );
}
