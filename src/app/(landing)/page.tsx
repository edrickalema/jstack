import { Heading } from "../components/heading"
import { MaxWidthWrapper } from "../components/max-with-wrapper"
import { Check } from "lucide-react"
import { ShinnyButton } from "../components/shinny-button"
import { Navbar } from "../components/navbar"
const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <Heading>
              <span>Your Real Time SaaS Insights</span>
              <br />
              <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                Delivered to your discord
              </span>
            </Heading>

            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              Unlock real-time insights into your SaaS applications. Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new uers or any other event
              </span>{" "}
              directly to you a discord
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-center sm:items-start">
              {[
                "Real-time Discord alerts for crtical events",
                "Buy once, use forever",
                "Track sales, new users, or any other event",
              ].map((item, index) => (
                <li className="flex gap-1.5 items-center text-left" key={index}>
                  <Check className="size-5 text-brand-700 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinnyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Get started for free
              </ShinnyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
