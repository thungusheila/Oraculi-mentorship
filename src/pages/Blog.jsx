import React from "react";

function Blog() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Stay Informed with Our Latest Articles</h2>
      <div className="mt-5 space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <strong>The Importance of Mentorship in Career Growth</strong>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <strong>Networking Tips for Professionals</strong>
        </div>
      </div>
      <button className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg">Read More Articles</button>
    </section>
  );
}

export default Blog;
