import type { ChartPoint } from "../components/Insightschart";
import { icons } from "./icons";

export const tabs: AppTab[] = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "subscriptions", title: "Subscriptions", icon: icons.wallet },
  { name: "insights", title: "Insights", icon: icons.activity },
  { name: "settings", title: "Settings", icon: icons.setting },
];

export const HOME_USER = {
  name: "Adrian | JS Mastery",
};

export const HOME_BALANCE = {
  amount: 2489.48,
  nextRenewalDate: "2026-03-18T09:00:00.000Z",
};

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
  {
    id: "spotify",
    icon: icons.spotify,
    name: "Spotify",
    price: 5.99,
    currency: "USD",
    daysLeft: 2,
  },
  {
    id: "notion",
    icon: icons.notion,
    name: "Notion",
    price: 12.0,
    currency: "USD",
    daysLeft: 4,
  },
  {
    id: "figma",
    icon: icons.figma,
    name: "Figma",
    price: 15.0,
    currency: "USD",
    daysLeft: 6,
  },
];

export const HOME_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "adobe-creative-cloud",
    icon: icons.adobe,
    name: "Adobe Creative Cloud",
    plan: "Teams Plan",
    category: "Design",
    paymentMethod: "Visa ending in 8530",
    status: "active",
    startDate: "2025-03-20T10:00:00.000Z",
    price: 77.49,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-20T10:00:00.000Z",
    color: "#f5c542",
  },
  {
    id: "github-pro",
    icon: icons.github,
    name: "GitHub Pro",
    plan: "Developer",
    category: "Developer Tools",
    paymentMethod: "Mastercard ending in 2408",
    status: "active",
    startDate: "2024-11-24T10:00:00.000Z",
    price: 9.99,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-24T10:00:00.000Z",
    color: "#e8def8",
  },
  {
    id: "claude-pro",
    icon: icons.claude,
    name: "Claude Pro",
    plan: "Pro Plan",
    category: "AI Tools",
    paymentMethod: "Amex ending in 1010",
    status: "paused",
    startDate: "2025-06-27T10:00:00.000Z",
    price: 20.0,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-27T10:00:00.000Z",
    color: "#b8d4e3",
  },
  {
    id: "canva-pro",
    icon: icons.canva,
    name: "Canva Pro",
    plan: "Yearly Access",
    category: "Design",
    paymentMethod: "Visa ending in 7784",
    status: "cancelled",
    startDate: "2024-04-02T10:00:00.000Z",
    price: 119.99,
    currency: "USD",
    billing: "Yearly",
    renewalDate: "2026-04-02T10:00:00.000Z",
    color: "#b8e8d0",
  },
];

// Week 1: matches the Figma design
export const WEEK_1: ChartPoint[] = [
  { day: "Mon", value: 35.6, label: "$36" },
  { day: "Tue", value: 30.3, label: "$30" },
  { day: "Wed", value: 20.9, label: "$21" },
  { day: "Thr", value: 42, label: "$40" },
  { day: "Fri", value: 33.8, label: "$34" },
  { day: "Sat", value: 19.4, label: "$19" },
  { day: "Sun", value: 22.1, label: "$22" },
];

// Week 2: weekend-heavy spending
export const WEEK_2: ChartPoint[] = [
  { day: "Mon", value: 12.5, label: "$12" },
  { day: "Tue", value: 18.0, label: "$18" },
  { day: "Wed", value: 9.8, label: "$10" },
  { day: "Thr", value: 24.3, label: "$24" },
  { day: "Fri", value: 38.7, label: "$39" },
  { day: "Sat", value: 44.0, label: "$44" },
  { day: "Sun", value: 31.2, label: "$31" },
];

// Week 3: quiet week with one big charge
export const WEEK_3: ChartPoint[] = [
  { day: "Mon", value: 6.4, label: "$6" },
  { day: "Tue", value: 8.9, label: "$9" },
  { day: "Wed", value: 43.5, label: "$43" },
  { day: "Thr", value: 11.2, label: "$11" },
  { day: "Fri", value: 14.6, label: "$15" },
  { day: "Sat", value: 5.1, label: "$5" },
  { day: "Sun", value: 9.3, label: "$9" },
];

// Week 4: steady spending
export const WEEK_4: ChartPoint[] = [
  { day: "Mon", value: 27.0, label: "$27" },
  { day: "Tue", value: 25.4, label: "$25" },
  { day: "Wed", value: 29.8, label: "$30" },
  { day: "Thr", value: 26.1, label: "$26" },
  { day: "Fri", value: 31.5, label: "$32" },
  { day: "Sat", value: 23.7, label: "$24" },
  { day: "Sun", value: 28.9, label: "$29" },
];

export const MARCH_WEEKS = [WEEK_1, WEEK_2, WEEK_3, WEEK_4];
