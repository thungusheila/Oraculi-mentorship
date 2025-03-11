import React from "react";

function Events() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Stay Tuned for Our Next Big Event</h2>
      <div className="mt-5 space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <strong>Webinar on Career Growth Strategies</strong> - April 15th, 2025
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <strong>Networking Night with Industry Leaders</strong> - May 10th, 2025
        </div>
      </div>
      <button className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg">Register for Events</button>
    </section>
  );
}

export default Events;
