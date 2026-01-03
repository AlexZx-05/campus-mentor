export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 mt-14 mb-20 animate-fadeIn">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold animate-slideDown">
          Our <span className="text-blue-600">Courses</span>
        </h1>

        <p className="text-gray-600 mt-3 text-lg  animate-fadeInSlow">
          Structured, exam-focused learning designed to help you score better.
        </p>
      </div>


      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        {/* MAIN COURSE */}
        <div className="p-6 border rounded-xl bg-white shadow-sm
        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-cardPop">
          
          <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">
            Enrollment Open
          </span>

          <h2 className="text-2xl font-extrabold mt-3 underline underline-offset-4 decoration-blue-600 text-gray-900">
            MA02 — Mathematics
          </h2>

          <p className="text-gray-600 mt-2 text-sm">
            Learn important concepts clearly with notes, PYQs and exam strategy.
          </p>

          <p className="text-2xl font-semibold text-green-600 mt-4">
            ₹149 <span className="text-sm text-gray-500">Launch Offer</span>
          </p>

          <a href="https://rzp.io/rzp/Mp5PfKRt" target="_blank" rel="noopener noreferrer">
            <button className="mt-5 w-full px-6 py-3 bg-blue-600 text-white rounded-lg 
            hover:bg-blue-700 transition shadow-sm active:scale-95">
              Enroll Now
            </button>
          </a>

          <p className="text-gray-500 text-xs mt-2">
            Instant access after payment. Limited seats.
          </p>
        </div>


        {/* Coming Soon Cards */}
        <div className="p-6 border rounded-xl shadow-sm bg-gray-50 text-gray-500 
        hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-cardPop delay-200">
          <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded">
            Coming Soon
          </span>
          <h2 className="text-2xl font-bold mt-3">DAA</h2>
          <p className="mt-2 text-sm">Launching soon.</p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm bg-gray-50 text-gray-500 
        hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-cardPop delay-300">
          <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded">
            Coming Soon
          </span>
          <h2 className="text-2xl font-bold mt-3">ITP</h2>
          <p className="mt-2 text-sm">Launching soon.</p>
        </div>

      </div>
    </main>
  );
}
