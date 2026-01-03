"use client";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 animate-page">

      {/* Hero Section */}
      <section className="text-center mt-20 animate-fade-up">
        <h1 className="text-5xl font-extrabold leading-snug">
          Smart Exam Preparation,
          <span className="text-blue-600"> Guided by Seniors</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
          Campus MentorS helps college students learn directly from their seniors
          through structured, exam-focused courses designed to improve clarity, confidence, and scores.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/courses">
            <button className="px-7 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md hover:shadow-xl transition transform hover:scale-105">
              View Courses
            </button>
          </a>

          <a href="/demo">
            <button className="px-7 py-3 border rounded-lg hover:bg-gray-100 transition shadow-sm hover:shadow-md transform hover:scale-105">
              Join Free Demo
            </button>
          </a>
        </div>
      </section>


      {/* Why Section */}
      <section className="mt-24 px-4">
        <h2 className="text-3xl font-bold text-center animate-fade-up delay-1">
          Why Choose <span className="text-blue-600">Campus MentorS?</span>
        </h2>

        <p className="text-gray-600 text-center mt-2 animate-fade-up delay-2">
          Designed thoughtfully to make exam preparation simpler, smarter and more guided.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.01] animate-card">
            <h3 className="font-semibold text-lg">Senior-Led Mentorship</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Learn from seniors who have already cleared the same exams successfully.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.01] animate-card delay-1">
            <h3 className="font-semibold text-lg">Exam-Focused Content</h3>
            <p className="text-gray-600 mt-2 text-sm">
              No unnecessary content. Only what matters for your college exams.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.01] animate-card delay-2">
            <h3 className="font-semibold text-lg">Notes + PYQs + Doubts</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Get structured notes, previous year questions and live doubt support.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.01] animate-card delay-3">
            <h3 className="font-semibold text-lg">Affordable & Accessible</h3>
            <p className="text-gray-600 mt-2 text-sm">
              High-quality learning at a student-friendly price.
            </p>
          </div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="mt-24 text-center mb-20 animate-fade-up delay-3">
        <h2 className="text-3xl font-bold">
          Start Your Smarter Exam Journey Today
        </h2>

        <p className="mt-3 text-gray-600">
          Join students who choose guided preparation instead of confusion.
        </p>

        <a href="/courses">
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-xl transform hover:scale-105">
            Explore Courses
          </button>
        </a>
      </section>


      {/* Animation Styles */}
      <style jsx>{`
        .animate-page {
          animation: fadeIn 0.7s ease-in-out both;
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
        }

        .animate-card {
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
        }

        .delay-1 { animation-delay: .2s; }
        .delay-2 { animation-delay: .4s; }
        .delay-3 { animation-delay: .6s; }

        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </main>
  );
}
