"use client";

export default function Success() {
  return (
    <main className="max-w-6xl mx-auto px-6 mt-20 mb-20 text-center animate-fade-in">

      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 border border-green-300 text-green-700 rounded-full flex items-center justify-center text-4xl animate-pop">
          ✓
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold mt-6 animate-slide-up">
        Payment <span className="text-green-600">Successful!</span>
      </h1>

      <p className="text-gray-600 mt-3 text-lg animate-slide-up delay-100">
        Congratulations! 🎉 Your enrollment is confirmed.
      </p>


      {/* Access Box */}
      <div className="mt-10 bg-gray-50 border p-6 rounded-xl max-w-3xl mx-auto text-left animate-slide-up delay-200 shadow-sm hover:shadow-lg transition">
        <h2 className="text-xl font-bold">What Happens Next?</h2>

        <ul className="mt-4 text-gray-700 space-y-2 text-lg">
          <li>✔️ Join the <b>Private Telegram Group</b></li>
          <li>✔️ Get <b>Study Material, Notes & PYQs</b></li>
          <li>✔️ Receive <b>Lecture Links / Premium Content Access</b></li>
          <li>✔️ Get <b>Doubt Support & Regular Updates</b></li>
        </ul>

        <p className="mt-4 text-gray-600">
          If access is not received within <span className="font-semibold">12–24 hours</span>,
          please contact our support team below.
        </p>
      </div>


      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-5 animate-slide-up delay-300">

        <a href="https://t.me/+rvvOa2Ns9MwxYWJl" target="_blank">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 shadow transition transform hover:scale-105">
            Join Telegram Group
          </button>
        </a>

        <a href="/courses">
          <button className="px-6 py-3 border rounded-lg text-lg hover:bg-gray-100 shadow-sm hover:shadow transition transform hover:scale-105">
            Go Back to Courses
          </button>
        </a>
      </div>


      {/* Support */}
      <div className="mt-8 text-gray-700 animate-slide-up delay-400">
        <p className="text-lg font-semibold">Need Help?</p>
        <p className="text-gray-600">
          Email us at
          <span className="text-blue-600 font-semibold">
            {" "}sharmd7930@gmail.com
          </span>
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out both;
        }

        .animate-pop {
          animation: pop 0.6s ease-out both;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.8s ease forwards;
        }

        .delay-100 { animation-delay: .1s; }
        .delay-200 { animation-delay: .2s; }
        .delay-300 { animation-delay: .3s; }
        .delay-400 { animation-delay: .4s; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pop {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

    </main>
  );
}
