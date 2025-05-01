import { UploadReportButton } from "@/components/shared/upload-report-button";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

import Link from "next/link";

export const Hero = async () => {
  const user = await currentUser();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
              Your Personal AI Health Assistant
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Understand Your Medical Reports With AI Doctor
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Upload your medical reports and chat with our AI doctor to get
              personalized insights, explanations, and health recommendations -
              just like talking to a real doctor.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {user ? (
                <UploadReportButton label="Upload report" />
              ) : (
                <Link href={"/sign-in"}>
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Try for free
                  </Button>
                </Link>
              )}
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/ai-doctor.png"
                alt="AI Doctor analyzing medical report"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
