"use client";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-50 border-t overflow-hidden animate-footer">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="footer-item">
          <h2 className="text-2xl font-extrabold tracking-wide">
            <span className="text-gray-900">Campus</span>
            <span className="text-blue-600"> MentorS</span>
          </h2>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Learn smarter with guidance from seniors who have already cracked the same exams.
          </p>
        </div>


        {/* Links */}
        <div className="footer-item delay-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600 transition hover:translate-x-1 inline-block">Home</a></li>
            <li><a href="/courses" className="hover:text-blue-600 transition hover:translate-x-1 inline-block">Courses</a></li>
            <li><a href="/mentors" className="hover:text-blue-600 transition hover:translate-x-1 inline-block">Mentors</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition hover:translate-x-1 inline-block">Contact</a></li>
          </ul>
        </div>


        {/* Support */}
        <div className="footer-item delay-2">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Support
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-blue-600 transition hover:translate-x-1 cursor-pointer">Help & FAQs</li>
            <li className="hover:text-blue-600 transition hover:translate-x-1 cursor-pointer">Payment Support</li>
            <li className="hover:text-blue-600 transition hover:translate-x-1 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-600 transition hover:translate-x-1 cursor-pointer">Refund Policy</li>
          </ul>
        </div>


        {/* Contact */}
        <div className="footer-item delay-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Contact
          </h3>

          <p className="text-gray-600 text-sm">
            📧 Email:
            <span className="text-blue-600 font-semibold"> sharmd7930@gmail.com</span>
          </p>

          <p className="text-gray-600 text-sm mt-1">
            📞 WhatsApp:
            <span className="font-semibold"> Coming Soon</span>
          </p>
        </div>

      </div>

      <div className="text-center py-4 border-t text-gray-600 text-sm footer-item delay-4">
        © {new Date().getFullYear()} Campus MentorS — All Rights Reserved
      </div>


      {/* Animations */}
      <style jsx>{`
        .animate-footer {
          animation: fadeInFooter 0.6s ease-in-out both;
        }

        .footer-item {
          opacity: 0;
          animation: slideUp .9s ease forwards;
        }

        .delay-1 { animation-delay: .2s; }
        .delay-2 { animation-delay: .4s; }
        .delay-3 { animation-delay: .6s; }
        .delay-4 { animation-delay: .8s; }

        @keyframes fadeInFooter {
          from { opacity: 0 }
          to { opacity: 1 }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
}
