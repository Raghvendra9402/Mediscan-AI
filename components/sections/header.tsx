import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export const Header = async () => {
  const user = await currentUser();
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-teal-600" />
          <span className="text-xl font-bold">MediScan AI</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            How It Works
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            FAQ
          </Link>
        </nav>
        {!user ? (
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        ) : (
          <div>
            <UserButton />
          </div>
        )}
      </div>
    </header>
  );
};
