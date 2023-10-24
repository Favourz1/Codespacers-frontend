import Button from "@/components/Button"
import heroWomanImg from "@/assets/pngs/hero-woman.png"

const Home = () => {
    return (
        <div>
            <section className="py-5 min-h-screen bg-[##8E8E8E]">
                <div className="container mx-auto px-3">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center max-w-[70%] pt-10 pb-5 text-[#1d1d1d] ">
                            <div className="font-medium mb-3">Plan, Save and Achieve</div>
                            <h1 className="text-4xl font-semibold mb-5">Take Control of Your <span className="text-[#163A5F]">Finances</span></h1>
                            <div className="text-lg text-[#424242] mb-8">Set budgets, track expenses, manage categories and achieve your financial goals with our intuitive budgeting app. Sign up today with Budgetify which allows you to manage your money effectively.</div>
                            <Button customClass="min-w-[40%]" variant="filled">Get Started</Button>
                            <img className="h-[300px] mt-5" src={heroWomanImg} alt="Use Budgetify" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home