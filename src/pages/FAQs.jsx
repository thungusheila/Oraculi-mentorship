import React from "react";

function FAQs() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Got Questions? We’ve Got Answers.</h2>
      <div className="mt-5 space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <strong>What is the Oraculi program?</strong>
          <p>Oraculi is a mentorship and resource platform designed for career and personal growth.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <strong>How do I join?</strong>
          <p>Simply fill out the registration form, and our team will contact you.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
