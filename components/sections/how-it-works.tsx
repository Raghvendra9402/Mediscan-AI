import { Brain, FileUp, MessageCircle } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
              Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Three simple steps to get insights from your medical reports
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          <div className="relative flex flex-col items-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
              1
            </div>
            <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-teal-200 -z-10"></div>
            <h3 className="text-xl font-bold">Upload Your Reports</h3>
            <p className="text-center text-gray-500">
              Securely upload your medical reports through our easy-to-use
              interface.
            </p>
            <FileUp className="h-16 w-16 text-teal-600" />
          </div>
          <div className="relative flex flex-col items-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
              2
            </div>
            <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-teal-200 -z-10"></div>
            <h3 className="text-xl font-bold">AI Analysis</h3>
            <p className="text-center text-gray-500">
              Our AI doctor reads and understands your medical data in seconds.
            </p>
            <Brain className="h-16 w-16 text-teal-600" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
              3
            </div>
            <h3 className="text-xl font-bold">Chat & Learn</h3>
            <p className="text-center text-gray-500">
              Ask questions about your health and get personalized answers.
            </p>
            <MessageCircle className="h-16 w-16 text-teal-600" />
          </div>
        </div>
      </div>
    </section>
  );
};
