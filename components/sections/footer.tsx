import { Sparkles } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t bg-gray-100">
      <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">MediScan AI</span>
          </div>
          <nav className="flex gap-4 md:gap-6 flex-wrap">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MediScan AI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
