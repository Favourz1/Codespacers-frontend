import { Outlet } from "react-router-dom"
import authImg from "@/assets/pngs/auth-lady.png"
import BudgetifyWhiteLogo from "@/assets/icons/budgetify-logo-white.svg"
import FriendsIcon from "@/assets/icons/friends.svg"


const AuthLayout = () => {
    return (
        <div className="container mx-auto gap-5 flex items-center min-h-screen">
            <div className="hidden md:flex flex-col w-[45%]">
                <div className="flex flex-col p-6 rounded-3xl bg-primaryColor" style={{ background: "radial-gradient(circle, rgba(22,58,95,1) 0%, rgba(40,107,193,1) 35%, rgba(22,58,95,1) 100%);" }}>
                    <span className="mb-5"><BudgetifyWhiteLogo /></span>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center px-5 py-3 bg-white rounded-lg gap-4 w-[48%]">
                            <FriendsIcon /> <span className=" font-medium">User-Friendly</span>
                        </div>
                        <div className="flex items-center px-5 py-3 bg-white rounded-lg gap-4 w-[48%]">
                            <FriendsIcon /> <span className=" font-medium">Budget Managment</span>
                        </div>
                    </div>

                    <div className="flex items-center self-center px-5 py-3 bg-white rounded-lg gap-4 w-[48%]">
                        <FriendsIcon /> <span className=" font-medium">Expense Tracking</span>
                    </div>

                    <img src={authImg} alt="" />
                </div>
            </div>
            <div className="flex flex-col w-[55%]">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout