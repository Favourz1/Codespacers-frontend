import Button from "@/components/Button";
import heroWomanImg from "@/assets/pngs/hero-woman.png";
import whoWeAreImg from "@/assets/pngs/who-we-are-girl.png";
import howItWorksImg from "@/assets/pngs/how-it-works-lady.png";
import bannerImg from "@/assets/pngs/homepage-banner.png";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import { FAQS, HOW_IT_WORKS, UNIQUE_FEATURES } from "./data";
const Home = () => {
  return (
    <div>
      <section className="py-5 min-h-screen bg-[#E8EBEF]">
        <div className="container mx-auto px-3">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center max-w-full md:max-w-[70%] pt-10 pb-5 text-[#1d1d1d] ">
              <div className="font-medium mb-3">Plan, Save and Achieve</div>
              <h1 className="text-4xl font-semibold mb-5">
                Take Control of Your{" "}
                <span className="text-[#163A5F]">Finances</span>
              </h1>
              <div className="text-lg text-primaryAsh mb-8">
                Set budgets, track expenses, manage categories and achieve your
                financial goals with our intuitive budgeting app. Sign up today
                with Budgetify which allows you to manage your money
                effectively.
              </div>
              <Button
                customClass="min-w-[40%]"
                variant="filled"
                href="/onboarding/signup"
              >
                Get Started
              </Button>
              <img
                className="h-[300px] mt-5"
                src={heroWomanImg}
                alt="Use Budgetify"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Who We are */}
      <section className="py-8">
        <div className="container mx-auto px-3">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center w-full md:w-[40%] space-y-5">
              <div className="text-3xl text-primaryColor font-semibold">
                Who We Are
              </div>
              <p className="text-primaryAsh">
                At Budgetify, we are passionate about helping you take control
                of your finances. Our mission is to simplify budgeting and
                financial planning and also track expenses making it accessible
                to everyone.
              </p>
              <Button
                customClass="max-w-[60%]"
                variant="filled"
                iconPlacement="end"
                icon={<ChevronRight />}
                href="/about"
              >
                Learn More
              </Button>
            </div>
            <div className="w-full md:w-[60%] flex items-center relative my-5 md:my-0">
              <img src={whoWeAreImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Unique Features */}
      <section className="py-8">
        <div className="container mx-auto px-3">
          <div className="flex flex-col">
            <div className="max-w-full md:max-w-[50%] justify-center items-center text-center mx-auto mb-5">
              <div className="text-3xl text-primaryColor font-semibold">
                Our Unique Features
              </div>
              <p className="text-primaryAsh">
                Our web app has you in mind. We believe that managing your money
                is important and should be easy stress-free.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {UNIQUE_FEATURES.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center rounded-lg shadow-md md:gap-[10px] p-5 transition-all hover:scale-[1.02]"
                >
                  <span className="hidden md:flex">{item.icon}</span>
                  <div className="space-y-2">
                    <div className="text-xl font-medium">
                      {item.headingText}
                    </div>
                    <div className="text-primaryAsh text-sm">
                      {item.subText}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* How it works */}
      <section className="py-8">
        <div className="container mx-auto px-3">
          <div className="flex flex-col">
            <div className="max-w-full md:max-w-[50%] justify-center items-center text-center mx-auto mb-5">
              <div className="text-3xl text-primaryColor font-semibold">
                How it Works
              </div>
              <p className="text-primaryAsh">
                These are the basic steps to get started with Budgetify.
              </p>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col justify-center w-full md:w-[40%] space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {HOW_IT_WORKS.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col rounded-lg shadow-md gap-[10px] p-5 transition-all hover:scale-[1.02]"
                    >
                      {item.icon}
                      <div className="space-y-2">
                        <div className="text-xl font-medium">
                          {item.headingText}
                        </div>
                        <div className="text-primaryAsh text-sm">
                          {item.subText}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-[60%] flex items-center relative">
                <img
                  className="justify-self-end my-5 md:my-0"
                  src={howItWorksImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* middle banner */}
      <section className="py-8">
        <div className="">
          <div className="flex flex-row">
            <div className="flex flex-col justify-center w-full md:w-[70%] bg-primaryColor container mx-auto py-5">
              <div className="text-3xl text-white font-semibold mb-3">
                Begin Smart Expense Tracking and Budget Management{" "}
              </div>
              <div className="text-lg text-[#E6E6E6] mb-6">
                With Budgetify, be ensured of high security while managing your
                finances.
              </div>
              <Button
                customClass="!bg-white !text-primaryColor max-w-[250px]"
                variant="filled"
                href="/onboarding/signup"
              >
                Get Started
              </Button>
            </div>
            <div className="w-full md:w-[30%] flex items-center relative hidden md:flex">
              <img className="justify-self-end" src={bannerImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* faq */}
      <section className="py-8">
        <div className="container mx-auto px-3">
          <div className="flex flex-col">
            <div className="max-w-full max-w-[50%] justify-center items-center text-center mx-auto mb-5">
              <div className="text-3xl text-primaryColor font-semibold">
                Have Any Questions
              </div>
              <p className="text-primaryAsh">
                Get your answers to the common financial queries in Budgetify.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {FAQS.map((item) => (
                <button
                  key={item.id}
                  className="w-full rounded-md p-8 text-left group shadow-lg focus:outline-none"
                >
                  <div className="flex justify-between text-md font-medium">
                    {item.headingText}{" "}
                    <span className="text-primaryPink text-xl pl-6">+</span>
                  </div>
                  <div className="mt-3 hidden text-[#808080] text-sm group-focus:flex">
                    <p>{item.subText}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
