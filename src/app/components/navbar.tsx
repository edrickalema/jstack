import Link from "next/link"
import { MaxWidthWrapper } from "./max-with-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

export const Navbar = () => {
  const user = false
  return (
    <nav className="sticky- z-[100] h-16 inset-x-0 top-0 w-full transition-all border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-brand-700">E</span>vently
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button variant={"ghost"}>Sign Out</Button>
                </SignOutButton>

                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",

                    className: " sm:flex items-center gap-1",
                  })}
                >
                  Dashboard <ArrowRight className="ml-1.5 size-4"></ArrowRight>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: " sm:flex items-center gap-1",
                  })}
                >
                  Sign In
                </Link>
                <div className="h-8 w-px bg-gray-200" />
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",

                    className: " sm:flex items-center gap-1",
                  })}
                >
                  Sign up
                  <ArrowRight className="ml-1.5 size-4"></ArrowRight>
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
