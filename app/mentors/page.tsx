"use client";

export default function Mentors() {
  return (
    <main className="max-w-7xl mx-auto px-6 mt-14 mb-20">

      {/* Heading */}
      <div className="text-center animate-fade">
        <h1 className="text-4xl font-extrabold">
          Mentors You Can <span className="text-blue-600">Trust</span>
        </h1>

        <p className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto">
          Learn from seniors who have actually topped these subjects and know
          exactly how to crack the exams with clarity, strategy and confidence.
        </p>
      </div>



      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* ---- MENTOR CARD ---- */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition bg-white animate-card">

          {/* Badge */}
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded font-medium">
            A+ in MA02 • Top 5% of Batch
          </span>

          <div className="flex flex-col items-center text-center mt-4">

            {/* Profile Image */}
            <img
              src="https://i.ibb.co/3m9LJ5M/profile-user.png"
              className="h-20 w-20 rounded-full border shadow-sm"
            />

            <h2 className="text-xl font-bold mt-3">
              Senior Mathematics Mentor
            </h2>

            <p className="text-gray-600 text-sm mt-1">
              Batch 2024 • Verified Academic Mentor
            </p>

            <p className="text-gray-700 mt-3 text-sm leading-relaxed">
              Known for simplifying complex mathematical concepts into easy,
              understandable learning. Trusted by juniors for exam-focused,
              smart preparation strategies.
            </p>

            <span className="mt-4 px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">
              Teaching: MA02 — Mathematics
            </span>
          </div>
        </div>




        {/* ---- Coming Soon Cards ---- */}
        <div className="p-6 border rounded-xl shadow-sm bg-gray-50 text-gray-500 hover:shadow-md transition animate-card delay-1">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded font-medium">
            Coming Soon
          </span>

          <div className="text-center mt-3">
            <div className="h-16 w-16 rounded-full bg-gray-200 mx-auto"></div>

            <h2 className="text-2xl font-bold mt-3">
              DAA Mentor
            </h2>

            <p className="mt-2 text-sm leading-relaxed">
              High-performing senior mentor announcement soon.
            </p>
          </div>
        </div>


        <div className="p-6 border rounded-xl shadow-sm bg-gray-50 text-gray-500 hover:shadow-md transition animate-card delay-2">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded font-medium">
            Coming Soon
          </span>

          <div className="text-center mt-3">
            <div className="h-16 w-16 rounded-full bg-gray-200 mx-auto"></div>

            <h2 className="text-2xl font-bold mt-3">
              ITP Mentor
            </h2>

            <p className="mt-2 text-sm leading-relaxed">
              Mentor details will be announced shortly.
            </p>
          </div>
        </div>

      </div>




      {/* CTA Section */}
      <section className="text-center mt-20 animate-fade">
        <h2 className="text-2xl font-bold">
          Learn Directly From High-Achieving Seniors
        </h2>

        <p className="text-gray-600 mt-2">
          Gain clarity, confidence and exam-ready understanding with expert mentorship.
        </p>

        <a href="/courses">
          <button className="mt-5 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
            View Courses
          </button>
        </a>
      </section>


      {/* Animations */}
      <style jsx>{`
        .animate-fade {
          animation: fadeIn 0.8s ease-in-out both;
        }

        .animate-card {
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
        }

        .delay-1 { animation-delay: .2s; }
        .delay-2 { animation-delay: .4s; }

        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </main>
  );
}
