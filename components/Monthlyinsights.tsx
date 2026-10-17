import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ExpenseSummaryCard } from "./Expensesummarycard";
import { InsightsChart, type ChartPoint } from "./Insightschart";

// value is on the 0-45 scale; heights match the Figma bars
const WEEK_DATA: ChartPoint[] = [
  { day: "Mon", value: 35.6 },
  { day: "Tue", value: 30.3 },
  { day: "Wed", value: 20.9 },
  { day: "Thr", value: 42, label: "$40" },
  { day: "Fri", value: 33.8 },
  { day: "Sat", value: 19.4 },
  { day: "Sun", value: 22.1 },
];

export default function MonthlyInsights() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pt-4 pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-[18px]">
          <InsightsChart data={WEEK_DATA} />

          <ExpenseSummaryCard
            title="Expenses"
            period="March 2026"
            amount="-$424.63"
            change="+12%"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
