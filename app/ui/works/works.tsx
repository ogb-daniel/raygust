import { Button } from "@heroui/react";
import {
  ArrowRight,
  BarChart3,
  Settings,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function Works() {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          <div className="px-3 py-1 text-xs font-bold tracking-widest text-gray-500 uppercase bg-gray-50 border border-gray-200 rounded-full">
            How It Works
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            Three steps to
            <br />
            smarter answers
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mt-2">
            Upload your knowledge base through the dashboard. Raygust
            automatically processes, indexes, and stores your documents, ready
            to answer questions instantly. No setup, no configuration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-[#FF6B35]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[1.05rem] font-bold text-gray-900 mb-1.5">
                  Use the Dashboard
                </h3>
                <p className="text-[0.9rem] text-gray-600 leading-relaxed">
                  Upload files, manage your knowledge base, and chat with your
                  documents through an intuitive interface.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-[#FF6B35]">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[1.05rem] font-bold text-gray-900 mb-1.5">
                  Or use the API
                </h3>
                <p className="text-[0.9rem] text-gray-600 leading-relaxed">
                  Integrate AI-powered answers directly into your own app with
                  our Python and TypeScript SDKs.
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-6 text-sm font-semibold text-gray-900 bg-white border-gray-200 rounded-2xl border-2 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
          >
            See How It Works
            <div className="rounded-lg px-3 py-1 border-2 backdrop-blur-md  border-gray-100">
              <ArrowRight className="" />
            </div>
          </Button>
        </div>

        {/* Right Mockup */}
        <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center bg-white overflow-hidden ">
          {/* Background elements */}
          <div className="absolute inset-0 grid-pattern-accent opacity-[0.4] from-accent" />
          <div className="absolute inset-0 rounded-b-3xl bg-radial-[circle] from-accent"></div>
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-white" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-t from-transparent to-white" />

          {/* Central Floating UI */}
          <div className="relative z-10 w-full max-w-[26rem] mx-4 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transform transition-transform hover:-translate-y-1 duration-500">
            {/* Fake Browser Header */}
            <div className="flex items-center px-4 py-3 border-b border-gray-100 bg-gray-50/80">
              <div className="flex gap-1.5 mr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Knowledge Base
              </div>
            </div>

            {/* Table body */}
            <div className="p-5 space-y-3 bg-white">
              {/* Row 1 */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white rounded-lg shadow-sm border border-gray-100 text-[#FF6B35]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      employee_handbook.pdf
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 mt-0.5">
                      2.4 MB • 4 mins ago
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 text-[10px] font-bold tracking-wide text-emerald-700 bg-emerald-100/80 border border-emerald-200/50 rounded-full">
                  INDEXED
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white rounded-lg shadow-sm border border-gray-100 text-[#FF6B35]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      Q3_financial_report.csv
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 mt-0.5">
                      1.1 MB • Just now
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 text-[10px] font-bold tracking-wide text-blue-700 bg-blue-100/80 border border-blue-200/50 rounded-full flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                  PROCESSING
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white rounded-lg shadow-sm border border-gray-100 text-[#FF6B35]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      engineering_guidelines.md
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 mt-0.5">
                      45 KB • 2 days ago
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 text-[10px] font-bold tracking-wide text-emerald-700 bg-emerald-100/80 border border-emerald-200/50 rounded-full">
                  INDEXED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
