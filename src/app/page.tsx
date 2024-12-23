import { Heading } from "./components/heading"
import { MaxWidthWrapper } from "./components/max-with-wrapper"

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
