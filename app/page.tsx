"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    address: string;
  } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmittedData({
      name,
      email,
      address,
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0)] px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <section className="space-y-4">
          <span className="inline-flex w-fit rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
            User Details
          </span>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Collect contact details with a clean frontend form.
          </h1>
          <p className="max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            Enter a name, email address, and street address. The form stores the
            latest submission locally in the UI so you can confirm the captured
            values immediately.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-slate-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={4}
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="123 Main Street, City, Country"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Submit Details
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Latest Submission
            </h2>
            {submittedData ? (
              <dl className="mt-4 space-y-3 text-sm text-slate-700">
                <div>
                  <dt className="font-medium text-slate-500">Name</dt>
                  <dd>{submittedData.name}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Email</dt>
                  <dd>{submittedData.email}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Address</dt>
                  <dd className="whitespace-pre-wrap">{submittedData.address}</dd>
                </div>
              </dl>
            ) : (
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Fill out the form and submit it to preview the entered details
                here.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
