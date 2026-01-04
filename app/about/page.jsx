export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 mt-16 mb-20 animate-fade">

      {/* Hero Section */}
      <section className="text-center animate-slide">
        <h1 className="text-4xl font-extrabold">
          About <span className="text-blue-600">Campus MentorS</span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          College exams are not tough — the confusion around them is.
          Campus MentorS connects students with high-performing seniors
          so learning becomes clearer, faster and stress-free.
        </p>
      </section>


      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mt-16">

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gray-50 animate-card">
          <h2 className="text-2xl font-bold text-blue-600">🎯 Our Mission</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            To help college students learn smarter, confidently and without stress —
            by providing guidance directly from seniors who have already excelled
            in the same subjects.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gray-50 animate-card">
          <h2 className="text-2xl font-bold text-blue-600">🚀 Our Vision</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            To build India’s strongest student-to-student learning ecosystem where
            every student learns with clarity, direction and confidence.
          </p>
        </div>

      </section>


      {/* Mentors Section */}
      <section className="mt-16 animate-slide">
        <h2 className="text-3xl font-bold text-center">
          Mentors You Can <span className="text-blue-600">Trust</span>
        </h2>

        <p className="text-gray-600 text-center mt-2 max-w-3xl mx-auto">
          Our mentors are verified high-performing seniors who scored top grades
          in the same subjects — and truly understand what matters in exams.
        </p>

        <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700 max-w-4xl mx-auto">
          <li>✔ A+ / Top Grade Achievers</li>
          <li>✔ Real Subject Experience</li>
          <li>✔ Concepts + PYQs + Strategy</li>
          <li>✔ Friendly & Supportive Guidance</li>
        </ul>
      </section>


      {/* Difference Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center animate-slide">
          What Makes Us <span className="text-blue-600">Different?</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-card">
            <h3 className="font-semibold text-lg">College-Specific</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Designed exactly around your syllabus.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-card">
            <h3 className="font-semibold text-lg">Exam-Focused</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Only what truly matters.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-card">
            <h3 className="font-semibold text-lg">Real Mentorship</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Doubts + Guidance + Motivation.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-card">
            <h3 className="font-semibold text-lg">Affordable</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Student-friendly pricing.
            </p>
          </div>

        </div>
      </section>


      {/* Closing */}
      <section className="text-center mt-20 animate-slide">
        <p className="text-lg font-semibold text-gray-700">
          ❤️ Made by Students, for Students
        </p>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          When seniors guide juniors, academic stress disappears… and confidence begins.
        </p>
      </section>

    </main>
  );
}
