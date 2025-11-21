"use client";
import { useState } from "react";

export default function ReservePage() {
  const [form, setForm] = useState({ name: "", date: "", time: "", guests: 1 });

  async function handleSubmit(e: any) {
    e.preventDefault();
    
    const res = await fetch("/api/reserve", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Reservation sent successfully!");
  }

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Reserve Your Table</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Your Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="date"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="time"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />

        <input
          type="number"
          className="w-full p-3 border rounded"
          placeholder="Guests"
          onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
        />

        <button className="bg-red-500 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
