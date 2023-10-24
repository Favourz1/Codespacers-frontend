import FriendsIcon from "@/assets/icons/friends.svg"
import SaveIcon from "@/assets/icons/save.svg"
import SecurityIcon from "@/assets/icons/security.svg"



export const STORAGE_KEYS = {
  TOKEN: "token",
};

export const ROUTE_KEYS = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  AUTH_ROOT: "/u",
  DASHBOARD: "/u/dashboard",
  BUDGET: "/u/budget",
  SUBSCRIPTIONS: "/u/subscriptions",
  EXPENSE_RECORDS: "/u/expense-records",
  TRACK_EXPENDITURE: "/u/track-expenditure",
};

export const UNIQUE_FEATURES = [
  {
    id: 1,
    headingText: "User-Friendly",
    subText: "Our user friendly web interface makes budgeting and expense tracking a breeze, even if you are new to the financial management.",
    icon: <FriendsIcon />
  },
  {
    id: 2,
    headingText: "Budget Creation",
    subText: "Create customized budgets tailored to your specific financial goals and spending habits, ensuring you're in control of your financial journey.",
    icon: <FriendsIcon />
  },
  {
    id: 3,
    headingText: "Savings",
    subText: "With Budgetify, setting and tracking financial goals is a breeze. Whether you're saving for a dream vacation or paying off debts, our app keeps you on the path to success.",
    icon: <SaveIcon />
  },
  {
    id: 4,
    headingText: "Goal Settings",
    subText: " With Budgetify, setting and tracking financial goals is a breeze. Whether you're saving for a dream vacation or paying off debts, our app keeps you on the path to success.",
    icon: <SaveIcon />
  },
  {
    id: 5,
    headingText: "Independent Subscription Feature",
    subText: "A special feature that takes in all your subscriptions, puts them in a folder and gives you the ultimate power to manage, edit and delete",
    icon: <SecurityIcon />
  },
  {
    id: 6,
    headingText: "Security Measures",
    subText: "Rest easy with Budgetify's robust security measures. Your financial data is protected through encryption and industry-standard practices, ensuring your privacy is a top priority.",
    icon: <SecurityIcon />
  },
]