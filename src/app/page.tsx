"use client";

import RecurringDatePicker from "./components/RecurringDatePicker";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Recurring Date Picker Demo</h1>
        <RecurringDatePicker />
      </main>
    </div>
  );
}
