"use client"

import React, { useState } from "react"
import { supabase } from "../../lib/supabaseClient"

export default function AuthPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mode, setMode] = useState<"signIn" | "signUp">("signIn")
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    else setMessage("Check your email for a confirmation link (if enabled).")
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else {
      setMessage("Signed in")
      window.location.href = "/dashboard"
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setMessage("Signed out")
  }

  return (
    <main style={{ maxWidth: 540, margin: "48px auto", padding: 16 }}>
      <h1>{mode === "signIn" ? "Sign In" : "Sign Up"}</h1>

      <form onSubmit={mode === "signIn" ? handleSignIn : handleSignUp}>
        <label style={{ display: "block", marginBottom: 8 }}>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button type="submit">{mode === "signIn" ? "Sign In" : "Sign Up"}</button>
          <button
            type="button"
            onClick={() => setMode(mode === "signIn" ? "signUp" : "signIn")}
          >
            {mode === "signIn" ? "Switch to Sign Up" : "Switch to Sign In"}
          </button>
          <button type="button" onClick={handleSignOut}>Sign Out</button>
        </div>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </main>
  )
}
