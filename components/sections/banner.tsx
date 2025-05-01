import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Understand Your Health Better?
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of users who are taking control of their health
              with MediScan AI
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-teal-700"
            >
              See Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
