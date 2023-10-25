import FriendsIcon from "@/assets/icons/friends.svg"
import SaveIcon from "@/assets/icons/save.svg"
import SecurityIcon from "@/assets/icons/security.svg"
import ToolsIcon from "@/assets/icons/tools.svg"



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

export const HOW_IT_WORKS = [
  {
    id: 1,
    headingText: "Sign Up",
    subText: "Begin your journey to financial control by signing up for a budgetify account. It’s quick, easy and free. Just enter your details to get started.",
    icon: <ToolsIcon />
  },
  {
    id: 2,
    headingText: "Track Your Expenses",
    subText: "Start by creating a budget that aligns with your financial goals. You can set spending limits for various categories such as groceries, entertainment, and bills.",
    icon: <ToolsIcon />
  },
  {
    id: 3,
    headingText: "Monitor Your Progress",
    subText: "Record your daily expenses effortlessly. Whenever you make a purchase, simply log it into the app. Categorize your expenses to see where your money is going.",
    icon: <ToolsIcon />
  },
  {
    id: 4,
    headingText: "Stay On Budget",
    subText: "With Budgetify. you will receive alerts and insights to help you stay within your budget. Make informed decisions and watch your goals become a reality.",
    icon: <ToolsIcon />
  },
]

export const FAQS = [
  {
    id: 1,
    headingText: "How do I add an expense to my budget?",
    subText: "To add expense to your budget, log in to your Budgetify account and navigate to the “Expense Tracking” session. Click on the “Add Expense” button and fill in the details. Click “save” and the expense will be recorded in your budget."
  },
  {
    id: 2,
    headingText: "How can i track my income?",
    subText: "We provide you with great data analysis tool inline with our unique features that gives you detailed breakdown of how all your expenses occured."
  },
  {
    id: 3,
    headingText: "How can i set up multiple budgets?",
    subText: "Through our budget category feature. You will find this when you signup."
  },
  {
    id: 4,
    headingText: "Is my financial data secure with Budgetify?",
    subText: "Absolutely. We take data security seriously. Your financial information is encrypted and stored on secure servers. You can trust that your financial data is safe and confidential while using Budgetify.."
  },
]