export const FAQ = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get answers to common questions about MediScan AI
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 mt-12">
          {[
            {
              question: "Is MediScan AI a replacement for my doctor?",
              answer:
                "No, MediScan AI is designed to complement your healthcare, not replace it. Our AI helps you understand your medical reports and provides general health information, but it's not a substitute for professional medical advice, diagnosis, or treatment.",
            },
            {
              question: "What types of medical reports can I upload?",
              answer:
                "MediScan AI can analyze various medical reports including blood tests, imaging reports (X-rays, MRIs, CT scans), pathology reports, and general medical summaries. We support PDF, JPG, PNG, and text file formats.",
            },
            {
              question: "Is my medical data secure?",
              answer:
                "Yes, we take data security very seriously. All your medical data is encrypted both in transit and at rest. We comply with healthcare privacy standards, and your data is never shared with third parties without your explicit consent.",
            },
            {
              question: "How accurate is the AI's analysis?",
              answer:
                "MediScan AI is trained on a vast database of medical literature and reports. While it provides high-quality information, it's designed to be informative rather than diagnostic. Always consult with healthcare professionals for medical decisions.",
            },
            {
              question: "Can I use MediScan AI for free?",
              answer:
                // "We offer a free tier that allows you to analyze a limited number of reports per month. For more frequent use or advanced features, we offer affordable subscription plans."
                "Nhi, Gareebo k liye ye seva nhi bni h. paisa hona chahiye paisa. paisa ho toh bdi bdi baatein. bhakk gareeb!!!",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">{item.question}</h3>
              <p className="mt-2 text-gray-500">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
