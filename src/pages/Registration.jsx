import React from "react";

function Registration() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Join the Oraculi Community</h2>
      <form className="mt-5 space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Profession" className="w-full p-2 border rounded" />
        <select className="w-full p-2 border rounded">
          <option>Choose Your Goal</option>
          <option>Career Growth</option>
          <option>Networking</option>
          <option>Skill Development</option>
        </select>
        <button type="submit" className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg">Sign Up</button>
      </form>
      <p className="mt-3 text-gray-600 text-sm">We respect your privacy. Your information will be kept confidential and secure.</p>
    </section>
  );
}

export default Registration;
