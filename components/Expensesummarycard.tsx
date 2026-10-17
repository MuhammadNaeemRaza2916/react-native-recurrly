import { Text, View } from "react-native";

type Props = {
  title: string;
  period: string;
  amount: string;
  change: string;
};

export const ExpenseSummaryCard = ({
  title,
  period,
  amount,
  change,
}: Props) => (
  <View className="summary-card">
    <View className="summary-info">
      <Text className="summary-title">{title}</Text>
      <Text className="summary-sub">{period}</Text>
    </View>

    <View className="summary-end">
      <Text className="summary-title">{amount}</Text>
      <Text className="summary-sub">{change}</Text>
    </View>
  </View>
);
