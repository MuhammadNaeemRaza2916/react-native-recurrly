import { ExpenseSummaryCard } from "@/components/Expensesummarycard";
import { InsightsChart } from "@/components/Insightschart";
import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import { WEEK_2 } from "@/constants/data";
import { useSubscriptionStore } from "@/lib/subscriptionStore";
import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
  const { subscriptions } = useSubscriptionStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredSubscriptions = subscriptions.filter(
    (subscription) =>
      subscription.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subscription.category
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      subscription.plan?.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={filteredSubscriptions}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View className="pt-5">
            <Text className="text-3xl font-bold text-dark mb-5">
              Monthly Insights
            </Text>
            <ListHeading title="Upcoming" />
            <InsightsChart data={WEEK_2} initialActiveIndex={5} />
            <ExpenseSummaryCard
              title="Expenses"
              period="March 2026"
              amount="-$424.63"
              change="+12%"
            />
            <ListHeading title="History" />
          </View>
        }
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedId === item.id}
            onPress={() =>
              setExpandedId(expandedId === item.id ? null : item.id)
            }
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 120,
          gap: 12,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        // contentContainerClassName="pb-60"
      />
    </SafeAreaView>
  );
};

export default Insights;
