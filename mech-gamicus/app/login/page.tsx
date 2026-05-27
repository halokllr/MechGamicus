"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Logged in!");
            window.location.href = "/";
        }
    };

    const signUp = async () => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Check your email (or user created)");
        }
    };

    
    return (
        <main style={{ padding: "2rem" }}>
        <h1>Login</h1>

        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button onClick={signIn}>Sign In</button>
        <button onClick={signUp} style={{ marginLeft: "1rem" }}>
            Sign Up
        </button>
        </main>
    );
}