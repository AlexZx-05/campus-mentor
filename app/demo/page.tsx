export default function DemoVideos() {
  return (
    <main className="max-w-7xl mx-auto px-6 mt-16 mb-24">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">
        Course <span className="text-blue-600">Demo Lectures</span>
      </h1>

      <p className="text-gray-600 text-center mt-3 text-lg">
        Watch demo classes and understand our teaching style before fully joining.
      </p>


      {/* Info Banner */}
      <div className="mt-8 bg-blue-50 border border-blue-200 p-5 rounded-lg text-center">
        <p className="text-blue-800 font-semibold">
          🔐 Access Note: Full course lectures are available only for enrolled students.
        </p>
      </div>


      {/* Videos Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* MA02 Demo */}
        <div className="shadow-lg border rounded-xl p-4">
          <h2 className="text-xl font-bold">MA02 — Mathematics</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Concept clarity • Exam Strategy • PYQ Approach
          </p>

          <div className="mt-3 w-full h-48 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Math Demo"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-gray-700 mt-2 text-sm">
            This is a short preview. Full videos available after enrollment.
          </p>
        </div>


        {/* DAA Demo */}
        <div className="shadow-lg border rounded-xl p-4 opacity-70">
          <h2 className="text-xl font-bold">DAA</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Demo will be available soon
          </p>

          <div className="mt-3 w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Coming Soon</span>
          </div>
        </div>


        {/* ITP Demo */}
        <div className="shadow-lg border rounded-xl p-4 opacity-70">
          <h2 className="text-xl font-bold">ITP</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Demo will be available soon
          </p>

          <div className="mt-3 w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Coming Soon</span>
          </div>
        </div>

      </section>


      {/* CTA */}
      <div className="text-center mt-12">
        <a href="/courses">
          <button className="px-7 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 shadow">
            Enroll & Get Full Access
          </button>
        </a>
      </div>

    </main>
  );
}
