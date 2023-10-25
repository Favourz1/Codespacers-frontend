import BudgetifyBlueLogo from "@/assets/icons/budgetify-logo-blue.svg"
import BudgetifyWhiteLogo from "@/assets/icons/budgetify-logo-white.svg"
import facebook from "@/assets/pngs/Facebook.png"
import instagram from "@/assets/pngs/Instagram.png"
import linkedin from "@/assets/pngs/LinkedIn.png"
import x from "@/assets/pngs/x.png"
import Button from "../Button"
import { Link, Outlet } from "react-router-dom"
import "@/assets/styles/main.css"

const HomeLayout = () => {
    return (
        <div>
            <header className="py-2 bg-[#E8EBEF]">
                <nav className="container mx-auto flex justify-between items-center px-3">
                    <a href="#" className="mr-8">
                        <BudgetifyBlueLogo />
                        {/* <img src={budgetifyBlueLogo} alt="Budgetify Logo" /> */}
                    </a>
                    <ul className="hidden md:flex items-center space-x-2">
                        <li className="pt-2"><a href="#">Home</a></li>
                        <li className="pt-2"><a href="#">About</a></li>
                        <li className="pt-2"><a href="#">Features</a></li>
                        <li className="pt-2"><a href="#">FAQs</a></li>
                    </ul>
                    <div className="flex items-center space-x-3">
                        <Button variant="outlined">Login</Button>
                        <Button variant="filled">Register</Button>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="relative bg-primaryColor text-white pt-8 pb-6">
                <div className="container mx-auto px-6 md:px-16">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <Link to="/">
                                <BudgetifyWhiteLogo />
                            </Link>
                            <h5 className="text-sm mt-0 mb-2" >Plan, Save and Achieve.</h5>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6 md:justify-around">
                                <div className="w-full lg:w-3/12 px-0 md:px-4 mb-8 md:mb-0">
                                    <span className="block uppercase  text-sm font-semibold mb-2">Company</span>
                                    <ul className="space-y-2 list-unstyled mb-2">
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">About Us</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Contact Us</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Terms of Service</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Mission and Vision</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-0 md:px-4 mb-8 md:mb-0">
                                    <span className="block uppercase  text-sm font-semibold mb-2">Features</span>
                                    <ul className="space-y-2 list-unstyled mb-2">
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Savings</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Expense Tracking</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Budget Creation</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Goal Settings</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline hover:underline-offset-1 block pb-2 text-xs" href="">Security</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-0 md:px-4">
                                    <span className="block uppercase  text-sm font-semibold mb-2">Get in Touch</span>
                                    <ul className="space-y-2 list-unstyled">
                                        <li>
                                            <a className="flex items-center pb-2 text-xs" href="">No 1, Team Favourz Street. Banana Island. Lagos State</a>
                                        </li>
                                        <li>
                                            <a className="flex items-center pb-2 text-xs max-w-[35%] md:max-w-full" href="">hello@budgetify.com</a>
                                        </li>
                                        <li>
                                            <a className="flex items-center pb-2 text-xs max-w-[35%] md:max-w-full" href="">+234 818-145-1152</a>
                                        </li>
                                        <div className="flex items-center mt-4 space-x-5">
                                            <img className="hover:scale-125" src={x} alt="" />
                                            <img className="hover:scale-125" src={linkedin} alt="" />
                                            <img className="hover:scale-125" src={facebook} alt="" />
                                            <img className="hover:scale-125" src={instagram} alt="" />
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="flex flex-wrap items-center md:justify-between justify-center py-3 bg-white">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-black font-medium py-1">
                        © {new Date().getFullYear()} Built by Team Favourz. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout