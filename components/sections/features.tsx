import {
  FileText,
  MessageSquare,
  Shield,
  Sparkles,
  Upload,
} from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How MediScan AI Helps You
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered platform makes understanding your health simple and
              accessible
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-teal-100 p-3">
              <Upload className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold">Easy Upload</h3>
            <p className="text-center text-gray-500">
              Simply upload your medical reports in any format - PDF, images, or
              text files.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-teal-100 p-3">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold">Smart Analysis</h3>
            <p className="text-center text-gray-500">
              Our AI extracts and understands complex medical data from your
              reports.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-teal-100 p-3">
              <MessageSquare className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold">Natural Conversation</h3>
            <p className="text-center text-gray-500">
              Ask questions in plain language and get clear, doctor-like
              responses.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-teal-100 p-3">
              <Shield className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold">Private & Secure</h3>
            <p className="text-center text-gray-500">
              Your medical data is encrypted and never shared with third
              parties.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="rounded-full bg-teal-100 p-3">
              <Sparkles className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold">Health Insights</h3>
            <p className="text-center text-gray-500">
              Get personalized recommendations to maintain and improve your
              health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
