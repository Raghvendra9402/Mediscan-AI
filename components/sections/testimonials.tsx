export const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from people who have transformed their health understanding
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500">
                &quot;MediScan AI helped me understand my lab results when I was
                too anxious to wait for my doctor&apos;s appointment. The
                explanations were clear and reassuring.&quot;
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-100 p-1">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <p className="text-sm font-medium">Rajesh</p>
                <p className="text-sm text-gray-500">Patient</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500">
                &quot;As someone with a chronic condition, I need to review my
                reports frequently. This AI tool has made it so much easier to
                track my progress and understand changes.&quot;
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-100 p-1">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <p className="text-sm font-medium">Kunal pandey</p>
                <p className="text-sm text-gray-500">Regular User</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="space-y-2">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500">
                &quot;I was overwhelmed by my medical reports after surgery.
                MediScan AI broke everything down in simple terms and helped me
                ask better questions during my follow-up appointment.&quot;
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-100 p-1">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <p className="text-sm font-medium">Rahul shroff</p>
                <p className="text-sm text-gray-500">Post-surgery Patient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
